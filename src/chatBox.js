import React, { useState } from 'react';
import './style.css';

function ChatBox() {
    const [message, setMessage] = useState(''); // State variable to hold user input
    const [messages, setMessages] = useState([]); // State variable to hold chat messages

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        // Add the new message to the array of messages
        setMessages([...messages, { text: message, sentByUser: true }]);
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
            <div id="main">
                {/* <h1>I am the chatbox</h1> */}
                {/* Render the chat messages */}
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={msg.sentByUser ? 'message sent' : 'message received'}
                    >
                        {msg.text}
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
