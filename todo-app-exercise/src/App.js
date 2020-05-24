import React, {useState} from 'react';
//all CSS from "Understanding Typescript - 2020 Edition" by Maximilian
import './App.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

function App() {
  
  const [todos, setTodos] = useState([]);


  const addInputHandler = (input) => {
    setTodos([...todos, {key: Math.random().toString(), text: input}])
  }

  const removeElemHandler = (item) => {
    const newTodos = todos.filter( (elem) => elem.key!==item.key);
    setTodos(newTodos);
  }

  return (
    <div>
      <NewTodo onAddTodo={addInputHandler}/>
      <TodoList list = {todos} deleteElem={removeElemHandler} />
    </div>
  );
}

export default App;
