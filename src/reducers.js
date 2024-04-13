// reducers.js
import { combineReducers } from 'redux';
import exampleReducer from './Components/Chatbox/reducers';

import chatReducer from './Components/Chatbox/reducers';


const rootReducer = combineReducers({
  example: exampleReducer,
  chat:chatReducer
  // Add more reducers as needed
});

export default rootReducer;
