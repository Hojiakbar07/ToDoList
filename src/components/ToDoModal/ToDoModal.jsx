import React from 'react'

import './ToDoModal.scss'

const ToDoModal = ({ text, closeModal, showAddModal, title, setTitle, setContent, content, click }) => {
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    
    const handleContentChange = (e) => {
        setContent(e.target.value)
    }
    
    return (
        <div className={showAddModal ? 'modal active' : 'modal'}>
            <div className="modal__wrapper">
                <h2 className="modal__title">{text} заметку</h2>
                <form className="modal__form">
                    <div className="modal__group">
                        <input type="text" value={title} onChange={handleTitleChange} required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Title</label>
                    </div>
                    <div className="modal__group">
                        <input type="text" value={content} onChange={handleContentChange} required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Content</label>
                    </div>
                </form>
                <div className="modal__btns">
                    <button className="modal__cancel" onClick={closeModal}>Отмена</button>
                    <button className="modal__add" onClick={click}>{text}</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoModal