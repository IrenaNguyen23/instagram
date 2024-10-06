import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import "./CreatePostModal.css"
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { createPostAction } from '../../Redux/Post/Action'
import { uploadToCloudinary } from '../../Config/UploadToCloudinary'
const CreatePostModal = ({
    onClose, isOpen
}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState();
    const [caption, setCaption] = useState("")
    const dispatch = useDispatch();
    const [imgUrl, setImgUrl] = useState("");
    const [location, setLocation] = useState("");
    const token = localStorage.getItem("token");

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.file[0];
        if (
            droppedFile.type.startsWith("image/") ||
            droppedFile.type.startsWith("video/")) {
            setFile(droppedFile)
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    }
    const handleDragLeave = () => {
        setIsDragOver(false)
    }

    const handleOnChange = async (e) => {
        const file = e.target.files[0]
        if (file &&
            (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            const imgUrl = await uploadToCloudinary(file);
            setImgUrl(imgUrl);
            setFile(file);
            console.log("file : ", file)
        }
        else {
            setFile(null)
            alert("Please select an image or video")
        }

    }

    const handleCaptionChange = (e) => {
        setCaption(e.target.value)
    }
    const handleCreatePost = () => {
        const data = {
            jwt: token,
            data: {
                caption,
                location,
                image: imgUrl
            }
        }
        dispatch(createPostAction(data),
            onClose()
        )
    }
    return (
        <div>
            <Modal
                size={"4xl"}
                isCentered
                onClose={onClose}
                isOpen={isOpen}
            >
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-bewteen py-1 px-10 items-center'>
                        <p>Create New Post</p>
                        <Button className='' variant={"ghost"} size={"sm"} colorScheme='blue' onClick={handleCreatePost}> Share</Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div className='h-[70vh] justify-between pb-5 flex'>
                            <div className='w-[50%]'>
                                {!file && <div
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    className='drag-drog h-full'>
                                    <div>
                                        <FaPhotoVideo className='text-3xl' />
                                        <p>Drag Photos or videos here</p>
                                    </div>
                                    <label htmlFor="file-upload" className='custom-file-upload'>Select from your computer</label>
                                    <input className='file-input' type="file" id='file-upload' accept='image/*, video/*' onChange={handleOnChange} />
                                </div>}
                                {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt='' />}
                            </div>
                            <div className='w-[1px] border h-full'>

                            </div>
                            <div className='w-[50%]'>
                                <div className='flex items-center px-2'>
                                    <img className='w-7 h-7 rounded-full ' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95c81712-297b-4808-97d8-7982b899fed2/dhrzmm5-3177cecb-cd6c-4a22-b81d-8381a383697b.png/v1/fit/w_828,h_1206,q_70,strp/_closed__adopt__478_by_wakakel_dhrzmm5-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1YzgxNzEyLTI5N2ItNDgwOC05N2Q4LTc5ODJiODk5ZmVkMlwvZGhyem1tNS0zMTc3Y2VjYi1jZDZjLTRhMjItYjgxZC04MzgxYTM4MzY5N2IucG5nIiwiaGVpZ2h0IjoiPD0xODY0Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOTVjODE3MTItMjk3Yi00ODA4LTk3ZDgtNzk4MmI4OTlmZWQyXC93YWtha2VsLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.og9ZpdJhol7Odw-uk8TJV3-m-hL3BvvoaP3F3_sn5XU" alt="" />
                                    <p className='font-semibold ml-4'>username</p>
                                </div>
                                <div className='px-2'>
                                    <textarea placeholder='write a caption' className='captioninput' name='caption' rows="8" onChange={handleCaptionChange}></textarea>
                                </div>
                                <div className='flex justify-between px-2'>
                                    <GrEmoji />
                                    <p>
                                        {caption?.length}/2,200
                                    </p>
                                </div>
                                <hr />
                                <div className='p-2 flex justify-between items-center'>
                                    <input onChange={(e) => setLocation(e.target.value)} type="text" className='locationInput' placeholder='location' name='location' />
                                    <GoLocation />
                                </div>
                                <hr />

                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CreatePostModal
