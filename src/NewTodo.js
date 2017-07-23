import React from 'react';


const NewTodo = ({
  handleTodoUpdate,
  newTodoText,
  handleAddTodo,
}) =>
  <form
    onSubmit={ event => {
      event.preventDefault();
      handleAddTodo(event);
    } }
  >
    <input
      onChange={ handleTodoUpdate }
      value={ newTodoText }
    />
    <button type="submit">
      Add todo!
    </button>
  </form>;


export default NewTodo;