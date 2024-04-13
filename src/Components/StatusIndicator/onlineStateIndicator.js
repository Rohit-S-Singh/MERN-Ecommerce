import React from 'react';

function OnlineStatusIndicator({ isOnline }) {
  // Determine background color based on online status
  const backgroundColor = isOnline ? '#d0ffd2' : '#ffd0d0';

  return (
    <div className="online-status" style={{ backgroundColor }}>
      {isOnline ? 'Online' : 'Offline'}
      <div className={`indicator ${isOnline ? 'online' : 'offline'}`}></div>
    </div>
  );
}

export default OnlineStatusIndicator;
