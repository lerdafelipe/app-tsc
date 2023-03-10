import React from 'react'
import { type TodoId, type ListTodo, type TodoType } from '../types.d'
import Todo from './Todo'

interface Props {
  todos: ListTodo
  changeComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  deleteTodo: ({ id }: TodoId) => void
}

const Todos: React.FC<Props> = ({ todos, deleteTodo, changeComplete }) => {
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
                deleteTodo={deleteTodo}
                changeComplete={changeComplete} />
            </li>)
        })}
      </ul>
  )
}

export default Todos
