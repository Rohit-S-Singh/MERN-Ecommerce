import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ChatBox from '../Chatbox/chatBox';

import './style.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const SocketClient = ({ newMessage }) => {
    const [userInfo, setUserInfo] = useState({ name: '', email: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        setOpen(!(userInfo.name && userInfo.email)); // Open the modal if either name or email is empty
    }, [isSubmitted]);

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setOpen(false); // Close the modal after submission
    };

    return (
        <div className='main'>
            <div className='main-2'>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form className='fo' onSubmit={handleSubmit}>
                            <p>Enter Your Details before chatting !!</p>

                            <div className='form-data'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={userInfo.name}
                                    onChange={handleUserInfoChange}
                                    className='input-box'
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={userInfo.email}
                                    onChange={handleUserInfoChange}
                                    className='input-box'
                                />
                            </div>
                            <div className='butns'>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
                {isSubmitted && userInfo.name.trim() !== '' && userInfo.email.trim() !== '' && <ChatBox userInfo={userInfo} />}
            </div>
        </div>
    );
};

export default SocketClient;
