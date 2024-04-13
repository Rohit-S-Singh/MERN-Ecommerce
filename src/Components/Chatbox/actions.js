// actions.js
import axios from 'axios';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const ADD_MESSAGE = 'ADD_MESSAGE';


export const sendMessage = async (message,dispatch) => {

  console.log("lknlk");
  // return async (dispatch) => {
  //   // Dispatch an action to update the store with the message immediately

  //   console.log(message);
  //   dispatch({
  //     type: SEND_MESSAGE,
  //     payload: { text: message.text, sentByUser: true, sender: message.sender },
  //   });

  //   try {
      // Send the message to the backend
      const response = await axios.post('https://recomendation-system.up.railway.app/', {
        message: message.text,
        sender: message.sender,
      });

      console.log(response);


      // Dispatch an action to update the store with the received response
      // dispatch({
      //   type: RECEIVE_MESSAGE,
      //   payload: { text: response.data.message, sentByUser: false, sender: 'Backend' }, // Assuming your backend responds with a message field
      // });
    } 
    // catch (error) {
    //   // Handle error if necessary
    //   console.error('Error sending message:', error);
    // }
  // };
// };


export const addMessage = ({text, sentByUser, sender}) => {

  console.log("called");
  return {
    type: ADD_MESSAGE,
    payload: {
      text,
      sentByUser,
      sender
    }
  };
};
