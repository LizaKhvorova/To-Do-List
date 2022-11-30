import React, { useContext } from 'react';
import './style.css';
import { Todo } from '../Todo/Todo';
import { AppContext } from '../context/AppContext';

export function TaskBox() {
  const {todo} = useContext(AppContext);
  return(
    <ul id="task-box">
      {todo.map(item => (
          <Todo
            key={item.id}
            value={item.value}
            id={item.id}
          /> 
      ))}
    </ul>
  )
}