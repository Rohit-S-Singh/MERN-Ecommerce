// ExampleComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const ExampleComponent = (props) => {
  console.log(props);
  return (
    <div>
        <div>Hello</div>
      {/* <ul> */}
        {/* {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button> */}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   todos: state.example.todos, // Accessing state from the example reducer
// });

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(ExampleComponent);
