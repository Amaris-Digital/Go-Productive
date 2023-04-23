


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }


  import React from 'react'
  
  const InputField:React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
      <div>
        
      </div>
    )
  }
  
  export default InputField
  