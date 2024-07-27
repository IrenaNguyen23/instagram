import React from 'react'
import { useNavigate } from 'react-router-dom'

const StoryCircle = () => {
  const navigate=useNavigate()
  const handleNavigate=() =>{
    navigate("/story")
  }
  return (
    
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
      <img className='w-16 h-16 rounded-full' src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/anh-gai-xinh-01-3.jpg" alt="" />
      <p>user name</p>
    </div>
  )
}

export default StoryCircle
