import { type TodoId, type TodoType } from '../types.d'

interface Props extends TodoType {
  deleteTodo: ({ id }: TodoId) => void
  changeComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todo: React.FC<Props > = ({ completed, id, title, deleteTodo, changeComplete }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        defaultChecked={completed}
        type='checkbox'
        onChange={(event) => { changeComplete({ id, completed: event.target.checked }) }}/>

      <label>{title}</label>
      <button onClick={() => { deleteTodo({ id }) }} className='destroy'></button>
    </div>
  )
}

export default Todo
