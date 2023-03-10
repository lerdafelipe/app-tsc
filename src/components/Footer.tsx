import React from 'react'
import { type filterValue } from '../types.d'
import Filters from './Filters'

interface Props {
  filterSelected: filterValue
  activeCount: number
  onFilterChange: (filter: filterValue) => void
  handleDeleteCompleted: () => void
}

const Footer: React.FC<Props> = ({
  filterSelected,
  activeCount,
  onFilterChange,
  handleDeleteCompleted

}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tasks to do
      </span>

      <Filters
        handleDeleteCompleted={handleDeleteCompleted}
        filterSelected={filterSelected}
        onFilterChange={onFilterChange} />
    </footer>
  )
}

export default Footer
