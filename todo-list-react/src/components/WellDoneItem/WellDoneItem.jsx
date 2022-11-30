import React, {useContext} from 'react';
import './style.css';
import { AppContext } from '../context/AppContext';

export function WellDoneItem({value, id}) {
  const {removeDoneTodo} = useContext(AppContext);
  return(
    <li>
      <div>
        {value}
      </div>
      <button 
        className='cancel' 
        alt='cancel'
        onClick={() => removeDoneTodo(id)}
      />
    </li>   
  )
}