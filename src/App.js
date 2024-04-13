// import React, { useState } from 'react';
// import FriendsList from './Components/FriendsList/FriendsList';
// import ChatTypeSelector from './Components/ChatTypeSelector/chatTypeSelector'; // Assuming you have a ChatTypeSelector component
// import SocketClient from './Components/SocketClient/SocketClient';
// // import ChatBox from './ChatBox'; // Assuming you have a ChatBox component

// import ExampleComponent from './ExampleComponent';
// import Header from './Components/Header';

// // import Community from './Community/Community';

// // import CommunityList from './CommunityList/communityList';

// function App() {
//   const [chatType, setChatType] = useState(null);

//   // Sample friends data
//   const friends = [
//     { id: 1, name: 'Alice', isOnline: true, hasUnreadMessage: true },
//     { id: 2, name: 'Bob', isOnline: false, hasUnreadMessage: false },
//     { id: 3, name: 'Charlie', isOnline: true, hasUnreadMessage: true },
//     // Add more friends as needed
//   ];

//   const handleSelectPrivateChat = () => {
//     setChatType('private');
//   };

//   const handleSelectCommunityChat = () => {
//     setChatType('community');
//   };

//   return (
//     <div className="app-container">
//      {/* <ExampleComponent></ExampleComponent> */}
//      <Header></Header>
//      <ChatTypeSelector></ChatTypeSelector>
//     </div>
//   );
// }

// export default App;


// // <div className="box header">
// // <div className="title">Chat App Frontend</div>
// // <hr className="separator" />
// // </div>
// // <div className="content-container box">
// // <div className="friends-list-container">
// // </div>
// // <div className="chat-container">
// //   {chatType ? (
// //     chatType === 'community' && (
// //       <>
// //       <CommunityList/>
// //         <SocketClient />
// //         <FriendsList friends={friends} />
// //         {/* <ChatBox /> */}
        
// //       </>
// //     )
// //   ) : (
// //     <div>
// //     <ChatTypeSelector
// //       onSelectPrivateChat={handleSelectPrivateChat}
// //       onSelectCommunityChat={handleSelectCommunityChat}
// //     />
// //     <div> <p>Create a new Community</p>
// //         <Community></Community>
// //         </div>
// //     </div>
// //   )}
// // </div>
// // </div>
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ChatTypeSelector from './Components/ChatTypeSelector/chatTypeSelector';
import Community from './Components/Community/Community';

import ChatBox from './Components/Chatbox/chatBox';
import SocketClient from './Components/SocketClient/SocketClient';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<ChatTypeSelector/>} />
      <Route path="/community-chat" element={ <Community/>} />
      {/* <Route path="/community-chat/:id" component={}/> */}

      <Route path="/community-chat/:id" element={<SocketClient/>} />

      </Routes>
    </Router>
  );
};

export default App;
