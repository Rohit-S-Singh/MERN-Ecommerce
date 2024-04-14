import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const ChatTypeSelector = () => {
  console.log("Hi");
  return (
    <div className="chat-type-selector" style={styles.chatTypeSelector}>
      <div className='container'>
        <div className='textt'>
      <h3 className='heading'>Talk to strangers,Make Friends!</h3>
      <p>Experience an exciting free random chat alternative to find friends, connect with strangers, and talk with different people in random anonymous chat rooms. No registration required.</p>

      </div>
      <Link to="/private-chat" style={styles.link}><button className="button" style={styles.button}>Private Chat</button></Link>
      <Link to="/community-chat" style={styles.link}><button className="button" style={styles.button}>Community Chat</button></Link>
    </div>
    </div>
  );
};

const styles = {
  
  title: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color:" white"
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
