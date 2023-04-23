import React from 'react'
import { Todo } from "../Model/Todo";
import OneTodo from './OneTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    
  }

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="todos">
      {todos?.map((todo) => (
        <OneTodo
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList
