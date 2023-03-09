import React from 'react'
import { type ListTodo } from '../types'

interface Props {
  todos: ListTodo
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default Todos
