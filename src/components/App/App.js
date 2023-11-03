import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../index.css";
import Menu from "../Menu/Menu";
import Possibilities from "../Possibilities/Possibilities";
import Todos from "../Todos/Todos";
import AddPopup from "../AddPopup/AddPopup";
import TodoPopup from "../TodoPopup/TodoPopup";
import EditPopup from "../EditPopup/EditPopup";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [isTodoPopupOpen, setTodoPopupOpen] = useState(false);

  function openAddPopup() {
    setAddPopupOpen(true);
  }

  function closeAllPopups() {
    setAddPopupOpen(false);
    setEditPopupOpen(false);
    setTodoPopupOpen(false);
  }

  function handleEditClick(todo) {
    setSelectedTodo(todo);
    setEditPopupOpen(true);
  }

  function handleTodoClick(todo) {
    setSelectedTodo(todo);
    setTodoPopupOpen(true);
  }

  function onEditSubmit(todo) {
    const newTodo = todo;
    const updatedTodos = todos.slice().filter((t) => t !== selectedTodo);
    const newTodos = [newTodo, ...updatedTodos];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    closeAllPopups();
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/possibilities" element={<Possibilities />} />
        <Route
          path="/todos"
          element={
            <Todos
              todos={todos}
              onTodoClick={handleTodoClick}
              onAddButtonClick={openAddPopup}
              onEditButtonClick={handleEditClick}
            />
          }
        />
      </Routes>

      <AddPopup isOpen={isAddPopupOpen} onClose={closeAllPopups} />

      <TodoPopup
        isOpen={isTodoPopupOpen}
        onClose={closeAllPopups}
        selectedTodo={selectedTodo}
      />

      <EditPopup
        isOpen={isEditPopupOpen}
        onClose={closeAllPopups}
        selectedTodo={selectedTodo}
        onSubmit={onEditSubmit}
      />
    </>
  );
}

export default App;
