import React, {useContext} from 'react';
import './style.css';
import { AppContext } from '../context/AppContext';

export function Todo({value, id}) {

  const {checkTodo, removeTodo} = useContext(AppContext);
    return(
      <li>
        <div>
          {value}
        </div>
        <div className='act-container'>
          <button 
            className='check' 
            alt='check'
            onClick={() => checkTodo(id)}
          />
          <button 
            className='cancel' 
            alt='cancel'
            onClick={() => removeTodo(id)}
          />
        </div> 
      </li>  
    )
  }
  
