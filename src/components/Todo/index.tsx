import React from 'react'

const Todo = ({ text = '', id = '' }) => {
  return (
    <div>
      <span>{text}</span>
      <button>x</button>
    </div>
  )
}

export default Todo
