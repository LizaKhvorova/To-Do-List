import React from 'react';
import './style.css';
import { Todo } from '../Todo/Todo';

export function TaskBox({todo, removeTodo, checkTodo}) {

  return(
    <ul id="task-box">
      {todo.map(item => (
        <Todo   
          key={item.id} 
          value={item.value} 
          removeTodo={() => removeTodo(item.id)}
          checkTodo={() => checkTodo(item.id)}
        />
      ))}
    </ul>
  )
}