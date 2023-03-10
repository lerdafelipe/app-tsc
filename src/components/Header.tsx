import React from 'react'
import { type TodoTitle } from '../types.d'
import CreateTod from './CreateTod'

interface Props {
  addNewTodo: ({ title }: TodoTitle) => void
}

const Header: React.FC<Props> = ({ addNewTodo }) => {
  return (
    <header className='header'>
      <h1>TODO.tsx</h1>
      <CreateTod addNewTodo={addNewTodo} />
    </header>
  )
}

export default Header
