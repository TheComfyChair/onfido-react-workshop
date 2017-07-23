import React, { Component } from 'react';
import omit from 'lodash/fp/omit';
import TodoList from './TodoList';
import NewTodo from './NewTodo';


class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: {},
      newTodoText: '',
      nextTodoId: 0,
    };
  }


  _updateTodoInput = event => {
    this.setState({
      newTodoText: event.target.value,
    });
  };


  _clearTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: omit([todoId])(todos),
    }));
  };


  _completeTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: {
        ...todos,
        [todoId]: {
          ...todos[todoId],
          completed: !todos[todoId].completed,
        },
      },
    }));
  };


  _addTodo = () => {
    this.setState(({ todos, nextTodoId, newTodoText }) => ({
      todos: {
        ...todos,
        [nextTodoId]: {
          id: nextTodoId,
          text: newTodoText,
        },
      },
      nextTodoId: nextTodoId + 1,
      newTodoText: '',
    }));
  };


  render() {
    return (
      <div>
        <TodoList
          todoItems={ this.state.todos }
          handleTodoClear={ this._clearTodo }
          handleTodoComplete={ this._completeTodo }
        />
        <NewTodo
          handleTodoUpdate={ this._updateTodoInput }
          handleAddTodo={ this._addTodo }
          newTodoText={ this.state.newTodoText }
        />
      </div>
    );
  }
}

export default App;
