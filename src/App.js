import React, { useState } from 'react';
import './style.css';
import SocketClient from './SocketClient';
import ChatBox from './chatBox';

function App() {


  // Function to check if both name and email are entered
  // const isUserInfoEntered = userInfo.name.trim() !== '' && userInfo.email.trim() !== '';

  return (
    <div className="App">
      <div>Chat App Frontend</div>
      
      <SocketClient />
    </div>
  );
}

export default App;
