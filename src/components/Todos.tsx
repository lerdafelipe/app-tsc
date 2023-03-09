import React from 'react'
import { type TodoId, type ListTodo } from '../types.d'
import Todo from './Todo'

interface Props {
  todos: ListTodo
  deleteTodo: ({ id }: TodoId) => void
}

const Todos: React.FC<Props> = ({ todos, deleteTodo }) => {
  return (
      <ul className='todo-list'>
        { todos.map(todo => {
          return (
            <li
              key={todo.id}
              className={todo.completed ? 'completed' : ''} >
              <Todo
                title={todo.title}
                completed={todo.completed}
                id={todo.id}
                deleteTodo={deleteTodo} />
            </li>)
        })}
      </ul>
  )
}

export default Todos
