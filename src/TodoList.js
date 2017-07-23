import React from 'react';
import map from 'lodash/fp/map';


const TodoList = ({
  todoItems,
  handleTodoComplete,
  handleTodoClear,
} = {}) =>
  <ul
    style={{ border: '1px solid black', width: '25rem', padding: '1rem' }}
  >
    { map(item =>
        <li
          key={ item.id }
          style={{
            listStyle: 'none',
            borderBottom: '1px solid #EFEFEF',
            padding: '0.5rem 0',
            cursor: 'pointer',
          }}
        >
          <span
            onClick={ () => handleTodoComplete(item.id) }
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
              userSelect: 'none',
            }}
          >
            { item.text }
          </span>
          <span
            style={{
              paddingLeft: '1rem',
              color: 'red',
            }}
            onClick={ () => handleTodoClear(item.id) }
          >
            x
          </span>
        </li>
      )(todoItems) }
  </ul>;


export default TodoList;