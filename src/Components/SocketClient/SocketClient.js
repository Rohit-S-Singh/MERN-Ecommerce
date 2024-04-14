import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ChatBox from '../Chatbox/chatBox';

import './style.css';

const SocketClient = ({ newMessage }) => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('https://recomendation-system.up.railway.app/');

    // Example: Listen for messages from the server
    socket.on('rcvd-message', (data) => {
      console.log('Message from server:', data);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

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
  };

  const handleCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setMediaStream(stream);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takePicture = () => {
    const video = document.getElementById('camera-preview');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png');
    setPicture(imageUrl);
    // Stop the camera stream
    mediaStream.getTracks().forEach((track) => track.stop());
  };

  return (
    <div className='main'>
      
    <div className = 'main-2'>
      {isSubmitted && userInfo.name.trim() !== '' && userInfo.email.trim() !== '' && <ChatBox userInfo={userInfo} />}
      {!isSubmitted && (
        <form className='fo' onSubmit={handleSubmit}>
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
            placeholder="Enter your email"
            value={userInfo.email}
            onChange={handleUserInfoChange}
            className='input-box'
          />
          </div>

          <div className='butns'>

              <button type="submit">Submit</button>
              

            </div>

        </form>
      )}

{/* <button onClick={handleCameraAccess}>Access Camera</button>
              {mediaStream && (
                <>
                  <video id="camera-preview" autoPlay />
                  <button onClick={takePicture}>Take Picture</button>
                </>
              )}
              {picture && <img src={picture} alt="Captured" />}
 */}

     
    </div>
    </div>
  );
};

export default SocketClient;
