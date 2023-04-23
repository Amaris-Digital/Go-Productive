


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }


  import React from 'react'
  
  const InputField:React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
      <div>
        <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Enter your task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
      </div>
    )
  }
  
  export default InputField
  