import React, { useState } from 'react';
import FriendsList from './FriendsList';
import ChatTypeSelector from './chatTypeSelector'; // Assuming you have a ChatTypeSelector component
import SocketClient from './SocketClient';
// import ChatBox from './ChatBox'; // Assuming you have a ChatBox component

function App() {
  const [chatType, setChatType] = useState(null);

  // Sample friends data
  const friends = [
    { id: 1, name: 'Alice', isOnline: true, hasUnreadMessage: true },
    { id: 2, name: 'Bob', isOnline: false, hasUnreadMessage: false },
    { id: 3, name: 'Charlie', isOnline: true, hasUnreadMessage: true },
    // Add more friends as needed
  ];

  const handleSelectPrivateChat = () => {
    setChatType('private');
  };

  const handleSelectCommunityChat = () => {
    setChatType('community');
  };

  return (
    <div className="app-container">
      <div className="box header">
        <div className="title">Chat App Frontend</div>
        <hr className="separator" />
      </div>
      <div className="content-container box">
        <div className="friends-list-container">
        </div>
        <div className="chat-container">
          {chatType ? (
            chatType === 'community' && (
              <>
                <SocketClient />
                <FriendsList friends={friends} />
                {/* <ChatBox /> */}
              </>
            )
          ) : (
            <ChatTypeSelector
              onSelectPrivateChat={handleSelectPrivateChat}
              onSelectCommunityChat={handleSelectCommunityChat}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
