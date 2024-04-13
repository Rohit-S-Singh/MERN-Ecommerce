// actions.js

export const ADD_TODO = 'ADD_TODO'; // an action type  

export const addTodo = (text) => ({   // dispatching an action
  type: ADD_TODO,                        
  payload: text,
});
