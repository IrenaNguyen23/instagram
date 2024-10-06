import React from 'react'

const SuggetionCard = ({user}) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img className='w-9 h-9 rounded-full ' src={user.image || "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png"} alt="" />
        <div className='ml-2'>
            <p className='text-sm font-semibold'>{user.username}</p>
            <p className='text-sm font-semibold opacity-70'>Popular</p>
        </div>
      </div>
      <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggetionCard
