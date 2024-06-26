import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Link } from 'react-router-dom';

import Home from '../ChatBotTry/Try.js'
import Typewriter from "./Typewriter";
import './style.css'

const ChatTypeSelector = () => {
  return (
    <div className="chat-type-selector" >
      {/* <Home/> */}
      <div className='container'>
        <div className='textt'>
          <div id='heading'>
            <p>Work Manager🫡 <Typewriter text="reporting for duty " delay={300} infinite={true} />
            </p>
          </div>
        </div>

        <div id='btns'>
          <Link to="/workManager" ><button className="button" >Manage Work</button></Link>
          <Link to="/community-chat"><button className="button" >Chat</button></Link> 
          <Link to="/community-chat"><button className="button" >Manage Account</button></Link> 
        </div>

      </div>
    </div>
  );
};


export default ChatTypeSelector;
