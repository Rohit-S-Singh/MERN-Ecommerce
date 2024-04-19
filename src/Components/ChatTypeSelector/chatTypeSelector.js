import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const ChatTypeSelector = () => {
  return (
    <div className="chat-type-selector" >
      <div className='container'>
        <div className='textt'>
          <div id='heading'>
      <p>Talk to strangers,Make Friends!</p>
      </div>
      <div id = 'subtitle'>
      <p>Experience an exciting free random chat alternative to find friends, connect with strangers, and talk with different people in random anonymous chat rooms. No registration required.</p>
      </div>

      </div>
      <div id = 'btns'>
      {/* <Link to="/private-chat" ><button className="button" >Private Chat</button></Link> */}
      <Link to="/community-chat"><button className="button" >Community Chat</button></Link> 
      </div>

    </div>
    </div>
  );
};

// const styles = {
  
//   title: {
//     fontSize: '1.2rem',
//     marginBottom: '1rem',
//     color:" white"
//   },
//   button: {
//     display: 'block',
//     margin: '0 auto',
//     marginBottom: '0.5rem',
//     padding: '0.5rem 1rem',
//     fontSize: '1rem',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
//   link: {
//     textDecoration: 'none',
//   }
// };

export default ChatTypeSelector;
