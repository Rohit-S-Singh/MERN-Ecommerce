import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ChatTypeSelector from './Components/ChatTypeSelector/chatTypeSelector';
import Community from './Components/Community/Community';
import Navbar from './Components/Navbar/index';
import ChatBox from './Components/Chatbox/chatBox';
import SocketClient from './Components/SocketClient/SocketClient';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile';
import TodoList from './Components/ToDo/TodoList';
import LoginForm from './Components/Login/LoginForm'; // Keep this import

const App = () => {
  return (
    <Router>
      <Navbar />
      <div> {/* Add the class name here */}
        <Routes>
          <Route exact path="/" element={<ChatTypeSelector />} />
          <Route path="/community-chat" element={<Community />} />
          <Route path="/community-chat/:id" element={<SocketClient />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/workManager" element={<TodoList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
