import React from 'react'
import listIcon from '../../assets/icons/list.svg'
import gridIcon from '../../assets/icons/grid.svg'
import Button from '../Button/Button'

import './ToDoNav.scss'
const ToDoNav = ({ openSearch, toggleButton, gridToList }) => {
    return (
        <div className='nav'>
            <h2 className='nav__title'>
                {openSearch ? 'Поиск' : 'Все заметки'}
            </h2>
            <Button onClick={toggleButton}>
                {gridToList ? <img src={gridIcon} alt="grid-icon" /> :
                    <img src={listIcon} alt="list-icon" />}
                <span className="nav__span">
                    {gridToList ? 'Сетка' : 'Список'}
                </span>
            </Button>
        </div>
    )
}

export default ToDoNav