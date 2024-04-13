// reducers.js
import { ADD_MESSAGE } from './actions';

const initialState = {
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_MESSAGE:
        return {
          ...state,
          messages: [
            ...state.messages,
            {
              text: action.payload.text,
              sentByUser: action.payload.sentByUser,
              sender: action.payload.sender
            }
          ]
        };
    default:
      return state;
  }
};

export default chatReducer;
