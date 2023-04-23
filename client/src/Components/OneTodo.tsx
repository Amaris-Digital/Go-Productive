
import React, {useState} from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../Model/Todo";

const OneTodo: React.FC<{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }> = ({ todo, todos, setTodos }) => {


    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.name);

  return (
    <div>
      
    </div>
  )
}

export default OneTodo
