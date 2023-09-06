import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../index.css";
import Menu from "../Menu/Menu";
import Possibilities from "../Possibilities/Possibilities";
import Main from "../Main/Main";
import AddPopup from "../AddPopup/AddPopup";

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);

  function openAddPopup() {
    setAddPopupOpen(true);
  }

  function closeAddPopup() {
    setAddPopupOpen(false);
  }

  function handleTodoDelete(todo) {
    const updatedTodos = todos.slice().filter((t) => t !== todo);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }

  function handleDoneClick(todo) {
    if (todo.isDone) {

    } else if (!todo.isDone) {

    }
  }

  function handleEditClick(todo) {

  }

  function onAddSubmit(todo) {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    closeAddPopup();
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    if (localTodos) {
      setTodos(localTodos);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/possibilities" element={<Possibilities />} />
        <Route
          path="/main"
          element={
            <Main
              todos={todos}
              onAddButtonClick={openAddPopup}
              onDeleteButtonClick={handleTodoDelete}
              onDoneButtonClick={handleDoneClick}
              onEditButtonClick={handleEditClick}
            />
          }
        />
      </Routes>

      <AddPopup
        isOpen={isAddPopupOpen}
        onSubmit={onAddSubmit}
        onClose={closeAddPopup}
      />
    </>
  );
}

export default App;
