import { type TODO_FILTERS } from './const'

export interface TodoType {
  id: string
  title: string
  completed: boolean
}

export type TodoTitle = Pick<TodoType, 'title'>
export type TodoId = Pick<TodoType, 'id'>
export type TodoCompleted = Pick<TodoType, 'completed'>

export type filterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type ListTodo = TodoType[]
