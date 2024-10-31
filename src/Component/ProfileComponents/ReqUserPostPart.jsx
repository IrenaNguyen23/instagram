import React, { useEffect, useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { RiVideoAddLine } from 'react-icons/ri'
import ReqUserPostCard from './ReqUserPostCard'
import { useDispatch, useSelector } from 'react-redux'
import { reqUserPostAction } from '../../Redux/Post/Action'

const ReqUserPostPart = ({ user }) => {
  const [activeTab, setActiveTab] = useState()
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")
  const { post } = useSelector(store => store)
  console.log("post:", post)
  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable />,
      activeTab: ""
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine />
    },
    {
      tab: "Saved",
      icon: <BiBookmark />
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser />
    }
  ]
  useEffect(() => {
    const data = { jwt: token, userId: user?.id }
    dispatch(reqUserPostAction(data))
  }, [user, post.createdPost])
  return (
    <div>
      <div className='flex space-x-14 border-t relative'>
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            className={`${activeTab === item.tab ? "border-t border-black" : "opacity-60"
              } flex items-center cursor-pointer py-2 text-sm`}>
            <p>{item.icon}</p>
            <p className='ml-1'>{item.tab}</p>
          </div>
        ))}

      </div>
      <div>
        {/* lõi k lấy được danh sách */}
        <div className='flex flex-wrap'>
          {activeTab === "Post" && post?.usersPost?.length > 0 ? (
            post.usersPost.map((item) => (
              <ReqUserPostCard key={item.id} post={item} />
            ))
          ) : activeTab === "Saved" && user?.savedPost?.length > 0 ? (
            user.savedPost.map((item) => (
              <ReqUserPostCard key={item.id} post={item} />
            ))
          ) : (
            <p className="text-center w-full">No posts to display</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReqUserPostPart
