import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import "./ReqUserPostCard.css"

const ReqUserPostCard = () => {
    return (
        <div className='p-1'>
            <div className='post'>
                <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2023/05/02/14/15/british-shorthair-7965411_640.jpg" alt="" />
                <div className='overplay'>
                    <div className='overplay-text flex justify-between'>
                        <div>
                            <AiOutlineHeart></AiOutlineHeart><span>10</span>
                        </div>
                        <div><FaRegComment></FaRegComment> <span>30</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqUserPostCard
