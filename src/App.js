import React from 'react';
import FriendsList from './FriendsList';
// import ChatBox from './ChatBox';
import SocketClient from './SocketClient';

function App() {
  // Sample friends data
  const friends = [
    { id: 1, name: 'Alice', isOnline: true , hasUnreadMessage: true},
    { id: 2, name: 'Bob', isOnline: false , hasUnreadMessage: false},
    { id: 3, name: 'Charlie', isOnline: true , hasUnreadMessage: true},
    // Add more friends as needed
  ];

  return (
    <div className="app-container">
      <div className="box">
        <div>Chat App Frontend</div>
        <hr className="separator" />
      </div>
      <div className="content-container box">
        <div className="friends-list-container">
          <FriendsList friends={friends} />
        </div>
        {/* <div className="chat-box-container">
          <ChatBox />
        </div> */}
        <div className="socket-client-container">
          <SocketClient />
        </div>
      </div>
    </div>
  );
}

export default App;
