import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { login } from './authSlice';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const onButtonClick = () => {
    // Validate email and password, for simplicity, let's assume they are valid
    // Dispatch login action
    // props.login({ email, password });/
    // Redirect to home or other page
    navigate('/profile');
  }

  return (
    <div className='one'>
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login :))))</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
    </div>
  );
};

const mapDispatchToProps = {
  // login,
};

export default connect(null, mapDispatchToProps)(Login);
