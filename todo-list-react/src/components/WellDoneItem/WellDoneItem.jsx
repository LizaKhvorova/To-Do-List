import React from 'react';
import './style.css';

export function WellDoneItem({value, removeTodo}) {
  return(
    <li>
      <div>
        {value}
      </div>
      <button 
        className='cancel' 
        alt='cancel'
        onClick={removeTodo}
      />
    </li>   
  )
}