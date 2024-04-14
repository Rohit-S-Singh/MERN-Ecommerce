import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './CommunityList.css'; // Import CSS file for styling

const CommunityList = () => {
    const [communities, setCommunities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCommunities = async () => {
            try {
                const response = await axios.get('https://recomendation-system.up.railway.app/api/v1/community');
                setCommunities(response.data.data.communities);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching communities:', error);
            }
        };

        fetchCommunities();
    }, []);

    const handleDeleteCommunity = async (id) => {
        try {
            const res = await axios.get(`https://recomendation-system.up.railway.app/api/v1/community/delete/${id}`);

            // Update the communities state to remove the deleted community
            setCommunities(communities.filter(community => community._id !== id));
        } catch (error) {
            console.error('Error deleting community:', error);
        }
    };

    const handleJoinCommunity = async (id) => {


    }

    return (
        <div className="community-list-container">
            <h1>Community List</h1>
            {loading ? (
                <p>Loading communities...</p>
            ) : (
                <div className="community-cards-container">
                    {communities.map((community) => (
                        <div className="community-card" key={community.id}>
                            <h2 className="community-name">{community.name}</h2>
                            <p className="community-type">Type: {community.type}</p>
                            <button onClick={() => handleDeleteCommunity(community._id)} className="delete-button">Delete</button>
                            {community.type === 'Public' ? (
                                <Link to={`/community-chat/${community._id}`} className="chat-button">Chat</Link>
                            ) : (
                                <button onClick={() => handleJoinCommunity(community._id)} className="join-button">Join Community</button>
                            )}
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
};

export default CommunityList;
