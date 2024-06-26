
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ChatTypeSelector from './Components/ChatTypeSelector/chatTypeSelector';
import Community from './Components/Community/Community';
import Navbar from './Components/Navbar/index'



import ChatBox from './Components/Chatbox/chatBox';
import SocketClient from './Components/SocketClient/SocketClient';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import './App.css'; // Import your CSS file
import Footer from './Components/Footer/Footer';
import Login  from './Components/Login/index';
import Profile from './Components/Profile'
import TodoList from './Components/ToDo/TodoList';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <div> {/* Add the class name here */}
        <Routes>
          <Route exact path="/" element={<ChatTypeSelector />} />
          <Route path="/community-chat" element={<Community />} />
          <Route path="/community-chat/:id" element={<SocketClient />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workManager" element={<TodoList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </div>
      {/* <Footer></Footer> */}
    </Router>
  );
};

export default App;
