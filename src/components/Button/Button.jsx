import React from 'react'

import './Button.scss'

const Button = ({ children, onClick, showAddModal }) => {
    return (
        <button onClick={onClick} className={showAddModal ? 'remove' : 'button'}>
            {children}
        </button>
    )
}

export default Button