import React from 'react'
import { Todo } from "../Model/Todo";
import "./OneTodo.tsx"

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    
  }

const TodoList = () => {
  return (
    <div>
      
    </div>
  )
}

export default TodoList
