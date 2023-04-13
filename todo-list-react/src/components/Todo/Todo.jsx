import React from 'react';
import './style.css';

export function Todo({ value, removeTodo, checkTodo }) {
  return (
    <li>
      <div>
        <label>{value}</label>
      </div>
      <div className='act-container'>
        <button
          className='check'
          alt='check'
          onClick={checkTodo}
        />
        <button
          className='cancel'
          alt='cancel'
          onClick={removeTodo}
        />
      </div>
    </li>
  )
}