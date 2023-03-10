import { useState } from 'react'
import Footer from './components/Footer'
import Todos from './components/Todos'
import { type TodoType, type TodoId, type ListTodo, type filterValue } from './types.d'

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
  const [filter, setFilter] = useState<filterValue>('all')

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  const handleDeleteCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleChangeFilter = (filter: filterValue): void => {
    setFilter(filter)
  }

  const todosFilter = (): ListTodo => {
    if (filter === 'active') {
      const newTodos = todos.filter(todo => !todo.completed)
      return newTodos
    }
    if (filter === 'completed') {
      const newTodos = todos.filter(todo => todo.completed)
      return newTodos
    }
    return todos
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  const todosFiltered = todosFilter()

  return (
    <div className="todoapp">
        <h1>Todo.TSX</h1>
        <Todos changeComplete={handleCompleted} deleteTodo={handleRemove} todos={todosFiltered} />
        <Footer
          handleDeleteCompleted={handleDeleteCompleted}
          filterSelected={filter}
          onFilterChange={handleChangeFilter}
          activeCount={activeCount} />
    </div>
  )
}

export default App
