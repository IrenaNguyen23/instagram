import React, { useEffect, useState } from 'react'
import StoryCircle from '../../Component/Story/StoryCircle'
import HomeRight from '../../Component/HomeRight/HomeRight'
import PostCard from '../../Component/Post/PostCard'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { findUserPostAction } from '../../Redux/Post/Action'
import { findUserByUserIdsAction, getPopularUser, getUserProfileAction } from '../../Redux/User/Action'
import { hasStory } from '../../Config/Logics'

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userIds, setUserIds] = useState([]);  // Khởi tạo mảng rỗng để tránh undefined
  const user = useSelector(store => store.user);
  const post = useSelector(store => store.post);
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    if (token)
      dispatch(getUserProfileAction(token))
  }, [token])

  // Cập nhật userIds dựa trên danh sách following của người dùng
  useEffect(() => {
    if (user.reqUser) {
      const newIds = user.reqUser.following?.map(follower => follower.id) || [];
      setUserIds([user.reqUser.id, ...newIds]);
    }
  }, [user.reqUser]);

  // Chỉ gọi API khi token và userIds đã sẵn sàng
  useEffect(() => {
    if (userIds.length > 0 && token) {  // Kiểm tra nếu cả token và userIds đã có
      const data = {
        jwt: token,
        userIds: userIds.join(",")
      };
      dispatch(findUserPostAction(data));
      dispatch(findUserByUserIdsAction(data))
      dispatch(getPopularUser(token))
    }
  }, [userIds, post.createdPost, post.deletePost]);

  const storyUsers = hasStory(user.findUserByIds)
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
            {storyUsers.length>0 && storyUsers.map((item) => <StoryCircle user={item}/>)}
          </div>

          <div className='space-y-10 w-full mt-10'>
            {post.usersPost?.length > 0 && post.usersPost.map((item) => <PostCard post={item} />)}
          </div>
        </div>
        <div className='w-[35%]'>
          <HomeRight />
        </div>
      </div>
    </div>
  )
}

export default HomePage
