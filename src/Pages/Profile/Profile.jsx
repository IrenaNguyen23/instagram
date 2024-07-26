import React from 'react'
import UserProfileDetail from '../../Component/ProfileComponents/UserProfileDetail'
import ReqUserPostPart from '../../Component/ProfileComponents/ReqUserPostPart'

const Profile = () => {
  return (
    <div className='px-20'>
      <div>
        <UserProfileDetail/>
      </div>
      <div>
        <ReqUserPostPart/>
      </div>
    </div>
  )
}

export default Profile
