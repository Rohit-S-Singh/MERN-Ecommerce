// import React, { useEffect } from 'react';
import io from 'socket.io-client';

import React, { useState , useEffect } from 'react';

import ChatBox from './chatBox';


const SocketClient = ({newMessage}) => {

    
    const [userInfo, setUserInfo] = useState({ name: '', email: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // Function to handle user input for name and email
    const handleUserInfoChange = (e) => {
      const { name, value } = e.target;
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [name]: value,
      }));
    };


  const isUserInfoEntered = userInfo.name.trim() !== '' && userInfo.email.trim() !== '';

  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Function to handle user input for name and email
      const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          [name]: value,
        }));
      };
    
      // Function to handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
      };
  
      
      setIsSubmitted(true);
    };


    useEffect((newMessage) => {
        // Connect to the Socket.IO server
        const socket = io('https://recomendation-system.up.railway.app/'); // Replace with your server URL

        // Example: Listen for messages from the server
        socket.on('rcvd-message', (data) => {
            console.log('Message from server:', data);
        });

        // Example: Emit a message to the server
        socket.emit('new-message', {newMessage});
        
        // Clean up the socket connection when the component unmounts
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
        {isSubmitted && isUserInfoEntered && <ChatBox userInfo={userInfo} />}
        {!isSubmitted && (
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={userInfo.name}
                onChange={handleUserInfoChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={userInfo.email}
                onChange={handleUserInfoChange}
            />
            <button type="submit">Submit</button>
            </form>
      )}
        </div>
    );
};

export default SocketClient;
