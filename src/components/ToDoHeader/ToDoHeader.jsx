import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import searchIcon from '../../assets/icons/search.svg'
import ToDoSearchPanel from '../ToDoSearchPanel/ToDoSearchPanel'

import './ToDoHeader.scss'


const ToDoHeader = ({ openSearch, setOpenSearch, searchInput, setSearchInput }) => {
    const [showHeader, setShowHeader] = useState(true)

    const handleSearch = () => {
        setOpenSearch(true)
    }

    const handleBack = () => {
        setOpenSearch(false)
    }

    const handleClose = () => {
        setOpenSearch(false)
        setSearchInput('')
    }

    return (
        <div>
            {showHeader && (<div className='header__wrapper'>
                <h2 className="header__wrapper-title">Заметки</h2>
                <div className="header__wrapper-icon" onClick={handleSearch}>
                    <img src={searchIcon} alt="search" />
                </div>
            </div>)}
            <CSSTransition
                in={openSearch}
                timeout={300}
                classNames="search"
                unmountOnExit
                onEnter={() => setShowHeader(false)}
                onExited={() => setShowHeader(true)}
            >
                <ToDoSearchPanel
                    handleBack={handleBack}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    close={handleClose} />
            </CSSTransition>
        </div>

    )
}

export default ToDoHeader