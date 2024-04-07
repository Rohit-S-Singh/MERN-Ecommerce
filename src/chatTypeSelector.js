import React from 'react';

function ChatTypeSelector({ onSelectPrivateChat, onSelectCommunityChat }) {
  return (
    <div className="chat-type-selector">
      <button className="button" onClick={onSelectPrivateChat}>Private Chat</button>
      <button className="button" onClick={onSelectCommunityChat}>Community Chat</button>
    </div>
  );
}

export default ChatTypeSelector;
