import React from 'react';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";

import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <AddTodoForm/>
      <TodoList/>
      <Footer/>
    </div>
  );
}
