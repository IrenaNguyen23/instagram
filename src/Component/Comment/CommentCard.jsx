import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { isCommentLikedByUser, timeDifference } from '../../Config/Logics';
import { useDispatch, useSelector } from 'react-redux';
import { likeCommentAction, unLikeCommentAction } from '../../Redux/Comment/Action';

const CommentCard = ({ comment }) => {
  const [isCommentLike, setIsCommentLike] = useState();
  const dispatch = useDispatch();
  const {user} = useSelector(store => store)
  const token = localStorage.getItem("token");
  const data = {
    commentId: comment.id,
    jwt: token,
  }
  const handleLikeComment = () => {
    setIsCommentLike(true)
    dispatch(likeCommentAction(data))
  }
  const handleUnLikeComment = () => {
    setIsCommentLike(false)
    dispatch(unLikeCommentAction(data))
  }
  useEffect(()=>{
    setIsCommentLike(isCommentLikedByUser(comment, user.reqUser.id))
  },[user.reqUser])
  return (
    <div>
      <div className='flex items-center justify-between py-5'>
        <div className='flex items-center'>
          <div>
            <img className='w-9 h-9 rounded-full' src={comment?.user.image || "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="" />
          </div>
          <div className='ml-3'>
            <p>
              <span className='font-semibold'>{comment?.user.username}</span>
              <span className='ml-2'>{comment.content}</span>
            </p>
            <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
              <span>{timeDifference(comment?.createAt)}</span>
              {comment.likedByUsers.length > 0 && <span>{comment.likedByUsers.length} like</span>}
            </div>
          </div>
        </div>
        {isCommentLike ? <AiFillHeart onClick={handleUnLikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600' /> : <AiOutlineHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer' />}
      </div>
    </div>
  )
}

export default CommentCard
