import React, {useContext} from 'react';
import { WellDoneItem } from '../WellDoneItem/WellDoneItem';
import './style.css';
import { AppContext } from '../context/AppContext';

export function WellDoneBox() {
  const {doneTodo} = useContext(AppContext);
  return(
    <>
      <h2 className="done">Well done!</h2>
      <ul id="doneBox">
        {doneTodo.map(item => (
          <WellDoneItem 
            key={item.id}
            value={item.value}
            id={item.id}
          />
        ))}
      </ul>
    </>
  )
}