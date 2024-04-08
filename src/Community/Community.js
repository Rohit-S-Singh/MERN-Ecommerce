import React, { useState } from 'react';
import io from 'socket.io-client';

import './community.css';

const CreateCommunityForm = () => {
    const [communityType, setCommunityId] = useState('');
    const [communityName, setCommunityName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();


        // API call


        
    };

    const handleCommunityIdChange = (event) => {
        setCommunityId(event.target.value);
    };

    const handleCommunityNameChange = (event) => {
        setCommunityName(event.target.value);
    };

    return (
        <div className="create-community-form-container">
            <h1 className="form-title">Create a Community</h1>
            <form onSubmit={handleSubmit} className="create-community-form">
                <div className="form-group">
                    <label htmlFor="community-id" className="form-label">Community Type:</label>
                    <input 
                        type="text" 
                        id="community-id" 
                        name="community-id" 
                        value={communityType} 
                        onChange={handleCommunityIdChange} 
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
        </div>
    );
};

export default CreateCommunityForm;
