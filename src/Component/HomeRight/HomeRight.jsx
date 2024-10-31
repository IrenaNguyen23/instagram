import React from 'react'
import SuggetionCard from './SuggetionCard'
import { useSelector } from 'react-redux'

const HomeRight = () => {
  const {user,post} = useSelector((store)=> store)
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img className='w-12 h-12 rounded-full' src={user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
            </div>
            <div className='ml-3'>
              <p>{user.reqUser?.name}</p>
              <p className='opacity-70'>{user.username}</p>
            </div>
          </div>
          <div>
            <p className='text-blue-600 font-semibold'>swith</p>
          </div>
        </div>
          <div className='space-y-5 mt-10'>
            {user.popularUser?.map((item) => (<SuggetionCard user={item} />))}
          </div>
      </div>
    </div>
  )
}

export default HomeRight
