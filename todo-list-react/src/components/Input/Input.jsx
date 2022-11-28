import React, {useState} from 'react';
import './style.css';

export function Input({addTodo}) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue('');
  }


  return(
    <div className="input-container">
      <input 
        type="text" 
        className="new" 
        placeholder="...Add new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      >
      </input>
      <button 
        className="btn"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  )
}