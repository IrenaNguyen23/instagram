import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchUserCard = ({user}) => {
const navigation = useNavigate()
  return (
    <div onClick={()=>{navigation(`/${user.username}`)}} className='py-2 cursor-pointer'>
      <div className='flex items-center'>
        <img className='w-10 h-10 rounded-full' src={user?.image || "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png" } alt="" />
        <div className='ml-3'>
            <p>{user.name}</p>
            <p className='opacity-70'>{user.username}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchUserCard
