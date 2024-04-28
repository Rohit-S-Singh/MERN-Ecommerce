import './style.css';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { addMessage, sendMessage } from './actions';
import OnlineStatusIndicator from '../StatusIndicator/onlineStateIndicator';

function ChatBox({ userInfo, messages, addMessage }) {
  const [message, setMessage] = useState('');
  const [typingData, setTypingData] = useState({ UserName: '', isTyping: false });
  const [socket, setSocket] = useState(null); 

  const handleChange = (e) => {
    setMessage(e.target.value);

    // Emit typing status to the server
    socket.emit('typingStatuss', { UserName: userInfo.name, isTyping: true });
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessage('');

      // Emit the message to the server
      socket.emit('new-message', { message, sender: userInfo.name });
    }
  };

  useEffect(() => {
    const socketInstance = io('https://recomendation-system.up.railway.app/');
    setSocket(socketInstance);

    socketInstance.on('rcvd-message', (data) => {
      let sentByUser = data.sender === userInfo.name;
      addMessage({ text: data.message, sentByUser, sender: data.sender });
    });

    socketInstance.on('typingStatus', (data) => {
      setTypingData(data);
    });

    // Cleanup: Disconnect socket when component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, [userInfo.name, addMessage]);

  useEffect(() => {
    const debounceTime = 1000; // 1 second

    const typingTimer = setTimeout(() => {
      setTypingData((prevData) => ({ ...prevData, isTyping: false }));
    }, debounceTime);

    return () => {
      clearTimeout(typingTimer);
    };
  }, [message]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
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
        {typingData.isTyping && (
          <div className="message received">
            <p>{typingData.UserName} is typing...</p>
          </div>
        )}
      </div>
      <div id="message-box">
        <input
          placeholder="Write your message here"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages || [],
});

const mapDispatchToProps = {
  addMessage,
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
