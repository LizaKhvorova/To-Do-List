import React from 'react';
import { WellDoneItem } from '../WellDoneItem/WellDoneItem';
import './style.css';

export function WellDoneBox({doneTodo, removeTodo}) {
  return(
    <>
      <h2 className="done">Well done!</h2>
      <ul id="doneBox">
        {doneTodo.map(item => (
          <WellDoneItem 
            key={item.id}
            value={item.value}
            id={item.id}
            removeTodo={() => removeTodo(item.id)}
          />
        ))}
      </ul>
    </>
  )
}