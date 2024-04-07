import React, { useState, useEffect } from 'react';
import './style.css';
import io from 'socket.io-client';


import OnlineStatusIndicator from './onlineStateIndicator';

function ChatBox({ userInfo }) {
  const [message, setMessage] = useState(''); // State variable to hold user input
  const [messages, setMessages] = useState([]); // State variable to hold chat messages
  const [socket, setSocket] = useState(null); // State variable to hold the socket instance

  useEffect(() => {
    // Connect to the Socket.IO server when the component mounts
    const socketInstance = io('https://recomendation-system.up.railway.app/'); // Replace with your server URL
    setSocket(socketInstance);

   

    // Listen for incoming messages from the server
    socketInstance.on('rcvd-message', (data) => {
        let sentByUser;
        if(data.sender === userInfo.name)
        sentByUser = true;
        else
        sentByUser = false;
      setMessages((prevMessages) => [...prevMessages, { text: data.message, sentByUser: sentByUser, sender: data.sender }]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    // Add the new message to the array of messages
    // setMessages([...messages, { text: message, sentByUser: true }]);
    // Send the message to the server via socket
    socket.emit('new-message', { message, sender: userInfo.name });
    // Clear the input field after submission
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="App">
        <OnlineStatusIndicator isOnline={true} />
      <div id="main">
        {/* Render the chat messages */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sentByUser ? 'message sent' : 'message received'}
          >
            {msg.text} {msg.sentByUser ? `(sent by you)` : `sent by ${msg.sender}`}
          </div>
        ))}
      </div>
      <div id="message-box">
        <input
          placeholder="Write your message here"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSubmit}>Send Message</button>
      </div>
    </div>
  );
}

export default ChatBox;
