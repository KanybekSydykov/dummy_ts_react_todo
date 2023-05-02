import Todo from "../models/todo"
import React, { useState } from 'react'

type TodosContextObj = {
    items: Todo[],
    addTodo: (text:string) => void,
    removeTodo: (id:string) => void
}

type Props = {
    children:React.ReactNode
}

export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo: (text:string)=>{},
    removeTodo: (id:string)=>{}
})

export const TodosContextProvider:React.FC<Props> =(props)=>{
    const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    console.log(newTodo);
    

    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos];
    });
    console.log(todos);
    
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const contextValue:TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo : removeTodoHandler
  }

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>

}