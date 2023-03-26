import React from 'react'

const List = ({ todoList, deleteTodos}) => {
  
  // const complete = (id) => {
  //   deleteTodos(id);
  // }
  
  return (
    todoList.map((todo) => {
      return (
        <div key={todo.id}>
          <button onClick={() => deleteTodos(todo.id)}>完了</button>
          <span>{ todo.content }</span>
        </div>
      )
    })
  )
}

export default List