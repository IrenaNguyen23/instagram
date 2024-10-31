import React, { useEffect } from 'react'
import UserProfileDetail from '../../Component/ProfileComponents/UserProfileDetail'
import ReqUserPostPart from '../../Component/ProfileComponents/ReqUserPostPart'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findUserByUsernameAction, getUserProfileAction } from '../../Redux/User/Action';
import { isFollowing, isReqUser } from '../../Config/Logics';

const Profile = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { username } = useParams();
  const { user } = useSelector(store => store);
  const isRequser = isReqUser(user.reqUser?.id, user.findByUsername?.id);
  const isFollowed = isFollowing(user.reqUser, user.findByUsername);

  useEffect(()=>{
    const data={
      token,
      username
    }
    dispatch(getUserProfileAction(token))
    dispatch(findUserByUsernameAction(data))
  },[username, user.follower, user.following])

  return (
    <div className='px-20'>
      <div>
        <UserProfileDetail user={isRequser?user.reqUser:user.findByUsername} isFollowing={isFollowed} isRequser={isRequser}/>
      </div>
      <div>
        <ReqUserPostPart user={isRequser?user.reqUser:user.findByUsername}/>
      </div>
    </div>
  )
}

export default Profile
