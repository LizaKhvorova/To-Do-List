import React, {useState} from 'react';
import './App.css';
import { Input } from './components/Input/Input';
import { TaskBox } from './components/TaskBox/TaskBox';
import { WellDoneBox } from './components/WellDoneBox/WellDoneBox';
import { AppContext } from './components/context/AppContext';

function App() {
  const [todo, setTodo] = useState([{id: 1, value: "Hello"}, {id: 2, value: "Hey"}]);
  const [doneTodo, setDoneTodo] = useState([]);

  function handleAddTodo(value) {
    setTodo([...todo, {id: Date.now(), value}])
  }

  function handleRemoveTodo(id) {
    setTodo(todo.filter((item) => item.id !== id))
  }

  function handleRemoveDoneTodo(id) {
    setDoneTodo(doneTodo.filter((item) => item.id !== id))
  }

  function handleAddDoneTodo(id) {
    const newDoneTodo = todo.find(item => item.id === id);
    setDoneTodo([...doneTodo, newDoneTodo]);
    handleRemoveTodo(id);
  }

  const value = {
    todo: todo, 
    doneTodo: doneTodo,
    removeTodo: handleRemoveTodo,
    checkTodo: handleAddDoneTodo, 
    removeDoneTodo: handleRemoveDoneTodo
  }
  
  return (
    <>
      <AppContext.Provider value={value}>
        <h1>To Do list</h1>
        <div className="widget-container">
          <div className="widget">
            <Input
              addTodo={handleAddTodo}
            />
            <TaskBox/>
          </div>
          <div className="widget">
            <WellDoneBox/>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;