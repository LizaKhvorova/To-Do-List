import React from 'react';
import './style.css';
import { DeletedTodo } from '../DeletedTodo/DeletedTodo';

export function DeletedTodoBox({deletedTodo}) {
  return (
    <>
      <h2 className="deleted">Deleted tasks</h2>
      <ul id="deleted-box">
        {deletedTodo.map(item => (
          <DeletedTodo   
            key={item.id} 
            value={item.value} 
          />
        ))}
      </ul>
    </>
  )
}