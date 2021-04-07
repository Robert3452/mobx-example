import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList';
import data from './data';
import { v4 as uuid } from 'uuid';
import { todoStore } from './components/TodoStore';


export default function App() {

  return (
    <div className="">
      <TodoList todoStore={todoStore}></TodoList>
    </div>
  )
}
