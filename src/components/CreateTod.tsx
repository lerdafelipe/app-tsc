import React, { useState } from 'react'
import { type TodoTitle } from '../types.d'

interface Props {
  addNewTodo: ({ title }: TodoTitle) => void
}

const CreateTod: React.FC<Props> = ({ addNewTodo }) => {
  const [valueTask, setValueTask] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLElement>): void => {
    event.preventDefault()
    addNewTodo({ title: valueTask })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        autoFocus
        onChange={(e) => { setValueTask(e.target.value) }} />
    </form>
  )
}

export default CreateTod
