import React from 'react'
import './TodoAppContainer.css'

const TodoAppContainer = (props) => {
  return (
    <div className='border border-2 border-black container my-5 py-5 shadow rounded todo-container'>
      {props.children}
    </div>
  )
}

export default TodoAppContainer
