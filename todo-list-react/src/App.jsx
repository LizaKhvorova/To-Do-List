import React, {useState} from 'react';
import './App.css';
import { Input } from './components/Input/Input';
import { TaskBox } from './components/TaskBox/TaskBox';
import { WellDoneBox } from './components/WellDoneBox/WellDoneBox';
import { DeletedTodoBox } from './components/DeletedTodoBox/DeletedTodoBox';
import { Tabs } from './components/Tabs/Tabs';

function App() {
  const [todo, setTodo] = useState([{id: 1, value: "Hello"}, {id: 2, value: "Hey"}]);
  const [doneTodo, setDoneTodo] = useState([]);
  const [deletedTodo, setDeletedTodo] = useState([]);
  const [activeTab, setActiveTab] = useState("active");

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

  function handleAddDeletedFromTaskBox(id) {
    const removedTodo = todo.find(item => item.id === id);
    setDeletedTodo([...deletedTodo, removedTodo]);
    handleRemoveTodo(id);
  }

  function handleAddDeletedFromDoneBox(id) {
    const removedTodoFromDone = doneTodo.find(item => item.id === id);
    setDeletedTodo([...deletedTodo, removedTodoFromDone]);
    handleRemoveDoneTodo(id);
  }
 
  function handleSetTab(id) {
    setActiveTab(id);
  }

  return (
    <>
      <h1>To Do list</h1>
      <div className="widget-container">
        {activeTab === 'active' ? 
          <div className="widget">
            <Input
              addTodo={handleAddTodo}
            />
            <TaskBox
              todo={todo}
              removeTodo={handleAddDeletedFromTaskBox}
              checkTodo={handleAddDoneTodo}
            />
          </div> : 
        activeTab === 'done' ? 
          <div className="widget">
            <WellDoneBox
              doneTodo={doneTodo}
              removeTodo={handleAddDeletedFromDoneBox}
            
            />
          </div> :  
          <div className="widget">
            <DeletedTodoBox
              deletedTodo={deletedTodo}
              removeTodo={handleRemoveTodo}
              checkTodo={handleAddDoneTodo}
  
            />
          </div>
        }
        <Tabs
          activeTab={activeTab}
          setTab={handleSetTab}
        />
      </div>
    </>
  );
}

export default App;
