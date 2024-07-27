import React from 'react'

const SearchUserCard = () => {
  return (
    <div className='py-2 cursor-pointer'>
      <div className='flex items-center'>
        <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2019/08/04/06/06/boxing-4383119_1280.jpg" alt="" />
        <div className='ml-3'>
            <p>Full name</p>
            <p className='opacity-70'>user name</p>
        </div>
      </div>
    </div>
  )
}

export default SearchUserCard
