import React, {useState} from 'react';


import editIcon from '../../assets/icons/edit.svg'
import trashIcon from '../../assets/icons/trash.svg'
import ToDoModal from '../ToDoModal/ToDoModal'
import './ListItem.scss'

const ListItem = ({ gridToList, item, handleDelete, onEditItem }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(item.title)
    const [descr, setDescr] = useState(item.content)
    
    const { title, date, content, id } = item 
    
    const editToDo = () => {
        onEditItem(id, text, descr)
        setIsEditing(false)
    }
    
    
    const handleEdit = () => {
        setIsEditing(true)
    }
    
    const handleClose = () => {
        setIsEditing(false)
    }
    return (
        <>
        <div className='list'>
            <div className={gridToList ? "list__wrapper active" : "list__wrapper"}>
                <h2 className="list__title">{title}</h2>
                <span className="list__date">{date}</span>
            </div>
            <p className="list__description">{content}</p>
            <div className="list__buttons">
                <button onClick={handleEdit} className="list__buttons-edit">
                    <img src={editIcon} alt="edit-icon" />
                    <span>РЕДАКТИРОВАТЬ</span>
                </button>
                <button onClick={() => handleDelete(id)} className="list__buttons-trash">
                    <img src={trashIcon} alt="trash-icon" />
                    <span>Удалить</span>
                </button>
            </div>
        </div>
        <ToDoModal 
        text='Изменить' 
        showAddModal={isEditing} 
        closeModal={handleClose} 
        click={editToDo} 
        item={item}
        title={text}
        content={descr}
        setTitle={setText}
        setContent={setDescr}/>
        </>
        
        
    )
}

export default ListItem