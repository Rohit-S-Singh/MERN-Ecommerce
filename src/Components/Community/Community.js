import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import the toast function

import './community.css';

import CommunityList from '../CommunityList/communityList';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreateCommunityForm = () => {
    const [communityType, setCommunityType] = useState('');
    const [communityName, setCommunityName] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [createdCommunityName, setCreatedCommunityName] = useState('');
    const [userId, setUserId] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Check if userId matches the allowed ID
        if (userId !== 'admin-rohit') {
            // If userId doesn't match, show error toast message
            toast.error('Sorry! You dont have the rights to create a community. :(');
            return;
        }

        try {
            setShowLoader(true); // Show loader while waiting for response
            const response = await axios.post(
                'https://recomendation-system.up.railway.app/api/v1/community',
                {
                    name: communityName,
                    type: communityType
                }
            );

            if (response.data) {
                setCreatedCommunityName(communityName);
                setShowPopup(true);
            }
        } catch (error) {
            console.error('Error creating community:', error);
        } finally {
            setShowLoader(false); // Hide loader regardless of the outcome
        }
    };

    const handleCommunityTypeChange = (event) => {
        setCommunityType(event.target.value);
    };

    const handleCommunityNameChange = (event) => {
        setCommunityName(event.target.value);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <CommunityList />
            <Button
                onClick={handleOpen}
                style={{
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    display: 'inline-block',
                    textAlign: 'center',
                    margin: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease',
                }}
            >
                Create a new Community
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="create-community-form-container">
                        <h1 className="form-title">Create a Community</h1>
                        <form onSubmit={handleSubmit} className="create-community-form">
                            <div className="form-group">
                                <label htmlFor="community-type" className="form-label">Community Type:</label>
                                <select
                                    id="community-type"
                                    name="community-type"
                                    value={communityType}
                                    onChange={handleCommunityTypeChange}
                                    required
                                    className="form-input"
                                >
                                    <option value="">Select Community Type</option>
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="community-name" className="form-label">Community Name:</label>
                                <input
                                    type="text"
                                    id="community-name"
                                    name="community-name"
                                    value={communityName}
                                    onChange={handleCommunityNameChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-id" className="form-label">User ID:</label>
                                <input
                                    type="text"
                                    id="user-id"
                                    name="user-id"
                                    value={userId}
                                    onChange={(event) => setUserId(event.target.value)}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <button type="submit" className="submit-button">Create Community</button>
                        </form>

                        {/* Loader */}
                        {showLoader && <div className="loader">Community Creation in Progress!! Please wait..</div>}

                        {/* Popup modal */}
                        {showPopup && (
                            <div className="popup">
                                <div className="popup-content">
                                    <h2>Community Created!</h2>
                                    <p>Name: {createdCommunityName}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default CreateCommunityForm;
