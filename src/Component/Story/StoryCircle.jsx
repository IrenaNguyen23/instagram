import React from 'react'
import { useNavigate } from 'react-router-dom'

const StoryCircle = ({user}) => {
  const navigate=useNavigate()
  const handleNavigate=() =>{
    navigate(`/story/${user.id}`)
  }
  return (
    
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
      <img className='w-16 h-16 rounded-full' src={user.image || "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png"} alt="" />
      <p>{user.username}</p>
    </div>
  )
}

export default StoryCircle
