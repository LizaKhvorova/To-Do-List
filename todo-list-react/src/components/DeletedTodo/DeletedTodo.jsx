import React from 'react';
import './style.css';

export function DeletedTodo({value}) {
  return(
    <li>
      <div>
        {value}
      </div>
    </li>  
  )
}