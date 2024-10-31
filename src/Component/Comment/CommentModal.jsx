import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./CommentModal.css"
import { useDispatch, useSelector } from 'react-redux'
import { createCommentAction, findPostCommentAction } from '../../Redux/Comment/Action'
import { useParams } from 'react-router-dom'
import { findPostByIdAction } from '../../Redux/Post/Action'
import { timeDifference } from '../../Config/Logics'

const CommentModal = ({ onClose, isOpen, isPostLiked, isSaved, handledSavePost, handlePostLike }) => {
    const [commentContent, setCommentContent] = useState();
    const { postId } = useParams()
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const comment = useSelector(store => store.comment);
    const post = useSelector(store => store.post);
    const user = useSelector(store => store.user);

    console.log("post:----", post)
    useEffect(() => {
        const data = { jwt: token, postId }
        if (postId) {
            dispatch(findPostByIdAction(data))
        }
    }, [comment.createdComment, postId,comment.likeComment])
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[75vh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src={post.singlePost?.image} alt="" />
                            </div>
                            <div className='w-[55%] pl-10 relative'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src={user.reqUser.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>{user.reqUser.username}</p>
                                        </div>
                                    </div>
                                    <BsThreeDots />
                                </div>
                                <hr />
                                <div className='comment'>
                                    {post.singlePost?.comments?.map((item) => (<CommentCard comment={item} />))}
                                </div>

                                <div className='absolute bottom-0 w-[90%]'>
                                    <div className='flex justify-between items-center w-full py-4'>
                                        <div className='flex items-center space-x-2'>
                                            {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike} /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}
                                            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                                            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                                        </div>
                                        <div className='cursor-pointer'>
                                            {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handledSavePost} /> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handledSavePost} />}
                                        </div>
                                    </div>

                                    <div className='w-full py-2 text-left'>
                                        {post.singlePost?.likedByUsers.length > 0 && <p>{post.singlePost?.likedByUsers.length} likes</p>}
                                        <p className='opacity-50 text-sm cursor-pointer'>
                                            {post.singlePost?.createAt ? timeDifference(post.singlePost.createAt) : "No timestamp available"}
                                        </p>

                                    </div>

                                    <div className='w-full'>
                                        <div className='flex w-full items-center '>
                                            <BsEmojiSmile />
                                            <input className='commentInput' type="text" placeholder='Add comment...'
                                                onChange={(e) => setCommentContent(e.target.value)}
                                                value={commentContent}
                                                onKeyPress={(e) => {
                                                    if (e.key === "Enter") {
                                                        const data = {
                                                            postId, jwt: token,
                                                            data: {
                                                                content: commentContent
                                                            }
                                                        }
                                                        dispatch(createCommentAction(data))
                                                        setCommentContent("")
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal
