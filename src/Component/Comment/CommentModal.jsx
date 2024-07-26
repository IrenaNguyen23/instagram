import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./CommentModal.css"

const CommentModal = ({ onClose, isOpen, isPostLiked, isSaved, handledSavePost, handlePostLike }) => {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[75vh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src="https://images.pexels.com/photos/3806244/pexels-photo-3806244.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </div>
                            <div className='w-[55%] pl-10 relative'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://images.pexels.com/photos/289262/pexels-photo-289262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>usename</p>
                                        </div>
                                    </div>
                                    <BsThreeDots />
                                </div>
                                <hr />
                                <div className='comment'>
                                    {[1, 1, 1, 1, 1,1,1,1,1].map(() => (<CommentCard />))}
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
                                        <p>10 liles</p>
                                        <p className='opacity-50 text-sm cursor-pointer'>1 day ago</p>
                                    </div>

                                    <div className='w-full'>
                                        <div className='flex w-full items-center '>
                                            <BsEmojiSmile />
                                            <input className='commentInput' type="text" placeholder='Add comment...' />
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
