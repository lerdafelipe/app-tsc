import { useState } from 'react'
import Todos from './components/Todos'

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
  const [todos] = useState(MockTodo)

  return (
    <div className="App">
        <h1>Hola gente</h1>
        <Todos todos={todos} />
    </div>
  )
}

export default App
