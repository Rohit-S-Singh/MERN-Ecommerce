import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import SocketClient from './SocketClient';

import ChatBox  from './chatBox';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SocketClient />
    <ChatBox></ChatBox>
  </React.StrictMode>
);