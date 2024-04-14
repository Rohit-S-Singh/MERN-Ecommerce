import './style.css';
import io from 'socket.io-client';

import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';


import './style.css';
import { connect } from 'react-redux';
import { addMessage, sendMessage } from './actions';
import OnlineStatusIndicator from '../StatusIndicator/onlineStateIndicator';

function ChatBox({ userInfo, messages, addMessage }) {
  const [message, setMessage] = useState('');
  
  
  const [socket, setSocket] = useState(null); // State variable to hold the socket instance
  
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (message.trim() !== '') {
      // addMessage({ text: message, sentByUser: true, sender: userInfo.name });
      let mess = { text: message, sentByUser: true, sender: userInfo.name };

      setMessage('');

      console.log("message",message);

      socket.emit('new-message', { message, sender: userInfo.name });

      // socket.on('rcvd-message', (data) => {
      //   let sentByUser;
      //   if (data.sender === userInfo.name)
      //     sentByUser = true;
      //   else
      //     sentByUser = false;

      // addMessage({ text: data.message, sentByUser: sentByUser, sender: data.sender });

        // setMessages((prevMessages) => [...prevMessages, { text: data.message, sentByUser: sentByUser, sender: data.sender }]);
  
      // });

      console.log(mess);

      // sendMessage(mess,dispatch)
      
    }
  };

    useEffect(() => {
    // Connect to the Socket.IO server when the component mounts
    const socketInstance = io('https://recomendation-system.up.railway.app/'); // Replace with your server URL

    console.log(socketInstance);

    setSocket(socketInstance);



    // Listen for incoming messages from the server
    socketInstance.on('rcvd-message', (data) => {
      let sentByUser;
      if (data.sender === userInfo.name)
        sentByUser = true;
      else
        sentByUser = false;

        if(data.message)
      addMessage({ text: data.message, sentByUser: sentByUser, sender: data.sender });

      // setMessages((prevMessages) => [...prevMessages, { text: data.message, sentByUser: sentByUser, sender: data.sender }]);

    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, []);




  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="App">
      <OnlineStatusIndicator isOnline={true} />
      <div id="main">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sentByUser ? 'message sent' : 'message received'}>
            {msg.text} {msg.sentByUser ? '(sent by you)' : `sent by ${msg.sender}`}
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

const mapStateToProps = (state) => ({
  messages: state.chat.messages === undefined ? []: state.chat.messages
});

const mapDispatchToProps = {
  addMessage,
  sendMessage
  // sendMessage: (message) => dispatch(sendMessage(message))
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);

