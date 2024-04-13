import React from 'react';
import { Link } from 'react-router-dom';

const ChatTypeSelector = () => {
  console.log("Hi");
  return (
    <div className="chat-type-selector" style={styles.chatTypeSelector}>
      <h3 style={styles.title}>Welcome to the Chat System</h3>
      <Link to="/private-chat" style={styles.link}><button className="button" style={styles.button}>Private Chat</button></Link>
      <Link to="/community-chat" style={styles.link}><button className="button" style={styles.button}>Community Chat</button></Link>
    </div>
  );
};

const styles = {
  chatTypeSelector: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  button: {
    display: 'block',
    margin: '0 auto',
    marginBottom: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  link: {
    textDecoration: 'none',
  }
};

export default ChatTypeSelector;
