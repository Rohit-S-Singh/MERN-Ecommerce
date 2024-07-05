import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword } from '../Login/store'; // Ensure the import path is correct
import '../Login/LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.form?.email); // Safe access with optional chaining
  const password = useSelector((state) => state.form?.password); // Safe access with optional chaining

  console.log('Email state:', email); // Debugging statement
  console.log('Password state:', password); // Debugging statement

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="srouce">
          <a title="Learn How to create Beautiful HTML & CSS login page template" href="https://www.w3jar.com/beautiful-html-css-login-page-template/">W3jar.Com</a>
        </div>
        <div className="form-body">
          <h2 className="title">Log in with</h2>
          <div className="social-login">
            <ul>
              <li className="google"><a href="#">Google</a></li>
              <li className="facebook"><a href="#">Facebook</a></li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email || ''} // Ensure controlled component
                onChange={handleEmailChange} 
                required 
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password || ''} // Ensure controlled component
                onChange={handlePasswordChange} 
                required 
              />
            </div>
            <button type="submit" className="login-button">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
