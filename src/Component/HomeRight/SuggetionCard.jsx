import React from 'react'

const SuggetionCard = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img className='w-9 h-9 rounded-full ' src="https://images.pexels.com/photos/18034524/pexels-photo-18034524/free-photo-of-nh-ng-ng-i-dan-ba-th-gian-con-gai.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='ml-2'>
            <p className='text-sm font-semibold'>user name</p>
            <p className='text-sm font-semibold opacity-70'>Follows you</p>
        </div>
      </div>
      <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggetionCard
