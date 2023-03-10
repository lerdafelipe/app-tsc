import React from 'react'
import { FILTERS_BUTTONS } from '../const'
import { type filterValue } from '../types.d'

interface Props {
  onFilterChange: (filter: filterValue) => void
  handleDeleteCompleted: () => void
  filterSelected: filterValue
}

const Filters: React.FC<Props> = ({ handleDeleteCompleted, onFilterChange, filterSelected }) => {
  return (
    <div>
      <ul className='filters'>
        {Object.entries(FILTERS_BUTTONS).map(([key, { literals, href }]) => {
          return (
            <li key={key}>
              <a
                href={href}
                className={filterSelected === key ? 'selected' : ''}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as filterValue)
                }}
                >
                  {literals}
              </a>
            </li>
          )
        })}
      </ul>
      <button onClick={handleDeleteCompleted} className='clear-completed'>Clear completed</button>
    </div>
  )
}

export default Filters
