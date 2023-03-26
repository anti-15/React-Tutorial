import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Form = ({createTodos}) => {
  const [enterdTodo, setenterdTodo] = useState("");
  const addTodo = (e) => {

    if (enterdTodo !== "") {
      e.preventDefault();

      const newTodo = {
        id: nanoid(),
        content: enterdTodo
      }

      createTodos(newTodo);
      setenterdTodo("");
    }
    else {
      alert("何かを入力してください");
      e.preventDefault();
    }
    

  }
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={enterdTodo} onChange={ (e) => setenterdTodo(e.target.value)} />
        <button>追加</button>
      </form>
      
    </div>
  )
}

export default Form