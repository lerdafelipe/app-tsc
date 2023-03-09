import { useState } from 'react'
import Todos from './components/Todos'
import { type TodoId } from './types.d'

const MockTodo = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  }, {
    id: '2',
    title: 'todo 2',
    completed: true
  }, {
    id: '3',
    title: 'todo 3',
    completed: true
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(MockTodo)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
        <h1>Todo.TSX</h1>
        <Todos deleteTodo={handleRemove} todos={todos} />
    </div>
  )
}

export default App
