import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import ListItem from "./components/ListItem/ListItem";
import ToDoHeader from "./components/ToDoHeader/ToDoHeader";
import ToDoNav from "./components/ToDoNav/ToDoNav";

import editIcon from './assets/icons/edit.svg'
import ToDoModal from "./components/ToDoModal/ToDoModal";

const date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [openSearch, setOpenSearch] = useState(false)
  const [gridToList, setGridToList] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [toDoList, setToDoList] = useState(getLocalStorage())
  const [searchInput, setSearchInput] = useState('')


  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(toDoList))
  }, [toDoList]);


  const toggleButton = () => {
    setGridToList(!gridToList)
  }

  const handleShowAddModal = () => {
    setShowAddModal(true)
  }

  const handleCloseAddModal = () => {
    setShowAddModal(false)
  }

  const addListItem = () => {
    if (title && content) {
      const newList = {
        id: Math.random().toString(36).substring(2, 9),
        title,
        date,
        content
      }
      setToDoList([...toDoList, newList])
      setShowAddModal(false)
      setTitle('')
      setContent('')
    } else {
      alert('Заполните все поля')
    }
  }

  const handleDelete = (id) => {
    setToDoList([...toDoList.filter(item => item.id !== id)])
  }

  const onEditItem = (id, title, content) => {
    setToDoList([...toDoList.map(item => {
      if (item.id === id) {
        item.title = title
        item.date = date
        item.content = content
      }
      return item
    })])
  }

  return (
    <div className="App">
      <ToDoHeader
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput} />
      <Container>
        <ToDoNav
          openSearch={openSearch}
          toggleButton={toggleButton}
          gridToList={gridToList}
        />
        <div className={gridToList ? 'lists' : 'grid'}>
          {toDoList.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())).map(item => (
            <ListItem
              key={item.id}
              gridToList={gridToList}
              item={item}
              handleDelete={handleDelete}
              onEditItem={onEditItem}
            />
          ))}
        </div>
      </Container>
      <div className="App-addBtn">
        <Button onClick={handleShowAddModal} showAddModal={showAddModal}>
          <img src={editIcon} alt="edit icon" />
        </Button>
      </div>
      {<ToDoModal text='Добавить'
        closeModal={handleCloseAddModal}
        showAddModal={showAddModal}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        click={addListItem} />}
    </div>
  );
}

export default App;
