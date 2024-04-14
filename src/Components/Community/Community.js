import React, { useState } from 'react';
import axios from 'axios';

import './community.css';

import CommunityList from '../CommunityList/communityList';

import { toast } from 'react-toastify';

const CreateCommunityForm = () => {
    const [communityType, setCommunityType] = useState('');
    const [communityName, setCommunityName] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [createdCommunityName, setCreatedCommunityName] = useState('');


    const notify = () => toast.success('Community creation in progress...');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            notify();
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

            <CommunityList/>
            <div className="create-community-form-container">




            <h1 className="form-title">Create a Community</h1>
            <form onSubmit={handleSubmit} className="create-community-form">
                <div className="form-group">
                    <label htmlFor="community-type" className="form-label">Community Type:</label>
                    <input 
                        type="text" 
                        id="community-type" 
                        name="community-type" 
                        value={communityType} 
                        onChange={handleCommunityTypeChange} 
                        required 
                        className="form-input" 
                    />
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
                        {/* <button onClick={handleClosePopup}>Close</button> */}
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default CreateCommunityForm;
