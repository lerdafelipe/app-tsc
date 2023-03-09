import { type TodoId, type TodoType } from '../types.d'

interface Props extends TodoType {
  deleteTodo: ({ id }: TodoId) => void
}

const Todo: React.FC<Props > = ({ completed, id, title, deleteTodo }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        defaultChecked={completed}
        type='checkbox'
        onChange={() => {}}/>

      <label>{title}</label>
      <button onClick={() => { deleteTodo({ id }) }} className='destroy'></button>
    </div>
  )
}

export default Todo
