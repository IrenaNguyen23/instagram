import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'


function ChangeProfilePhotoModal({ isOpen, onOpen, onClose, handleProfileImageChange }) {
    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">Change Profile Photo</ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col items-center">
                            <label
                                htmlFor="profileImage" // Sử dụng htmlFor thay cho for
                                className="font-bold py-3 text-blue-600 text-center cursor-pointer text-xs w-full"
                            >
                                Upload Photo
                            </label>
                            <input
                                onChange={handleProfileImageChange}
                                type="file"
                                id="profileImage"
                                name="profileImage"
                                className="hidden" // Ẩn input file và sử dụng nhãn để kích hoạt
                            />
                        </div>
                        <hr />
                        <p className="font-bold py-3 text-red-600 text-center cursor-pointer" onClick={() => { /* Thêm logic xoá ảnh */ }}>
                            Remove Photo
                        </p>

                        <hr />
                        <p className="py-3 text-center cursor-pointer" onClick={onClose}>
                            Cancel
                        </p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ChangeProfilePhotoModal;
