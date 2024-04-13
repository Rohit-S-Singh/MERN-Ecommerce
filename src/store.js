import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from './reducers'; 

const store = configureStore({
  reducer: rootReducer,
  // Optionally configure middleware, devTools, and other settings here
});

export default store;
