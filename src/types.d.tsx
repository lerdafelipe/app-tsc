export interface TodoType {
  id: string
  title: string
  completed: boolean
}

export type TodoTitle = Pick<TodoType, 'title'>
export type TodoId = Pick<TodoType, 'id'>
export type TodoCompleted = Pick<TodoType, 'completed'>

export type ListTodo = TodoType[]