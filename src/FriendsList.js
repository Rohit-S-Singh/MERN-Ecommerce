import React from 'react';

function FriendsList({ friends, onFriendClick }) {
  return (
    <div className="friends-list">
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Friends</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={friend.id} className={`friend ${index % 2 === 0 ? 'even' : 'odd'}`} onClick={() => onFriendClick(friend)}>
            <div className={`friend-status ${friend.isOnline ? 'online' : 'offline'}`}></div>
            <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'normal' }}>{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
