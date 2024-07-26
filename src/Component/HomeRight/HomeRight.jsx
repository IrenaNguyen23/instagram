import React from 'react'
import SuggetionCard from './SuggetionCard'

const HomeRight = () => {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img className='w-12 h-12 rounded-full' src="https://images.pexels.com/photos/5219033/pexels-photo-5219033.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='ml-3'>
              <p>full name</p>
              <p className='opacity-70'>user name</p>
            </div>
          </div>
          <div>
            <p className='text-blue-600 font-semibold'>swith</p>
          </div>
        </div>
          <div className='space-y-5 mt-10'>
            {[1, 1, 1, 1, 1].map((item) => <SuggetionCard />)}
          </div>
      </div>
    </div>
  )
}

export default HomeRight
