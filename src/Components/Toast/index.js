import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({text}){
    const notify = () => toast(text);

    return (
      <div>
        {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer />
      </div>
    );
  }

export default Toast;