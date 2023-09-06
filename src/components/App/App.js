import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../index.css";
import Menu from "../Menu/Menu";
import Possibilities from "../Possibilities/Possibilities";
import Todos from "../Todos/Todos";
import DoneTodos from "../DoneTodos/DoneTodos";
import AddPopup from "../AddPopup/AddPopup";
import TodoPopup from "../TodoPopup/TodoPopup";

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
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

  function handleTodoDelete(todo) {
    if (!todo.isDone) {
      const updatedTodos = todos.slice().filter((t) => t !== todo);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    } else if (todo.isDone) {
      const updatedDoneTodos = doneTodos.slice().filter((t) => t !== todo);
      localStorage.setItem('doneTodos', JSON.stringify(updatedDoneTodos));
      setDoneTodos(updatedDoneTodos);
    }
  }

  function handleDoneClick(todo) {
    console.log(todo)
    if (!todo.isDone) {
      todo.isDone = true;
      const updatedTodos = todos.slice().filter((t) => t !== todo);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
      const updatedDoneTodos = [todo, ...doneTodos];
      setDoneTodos(updatedDoneTodos);
      localStorage.setItem('doneTodos', JSON.stringify(updatedDoneTodos));
    } else {
      todo.isDone = false;
      const updatedDoneTodos = doneTodos.slice().filter((t) => t !== todo);
      localStorage.setItem('doneTodos', JSON.stringify(updatedDoneTodos));
      setDoneTodos(updatedDoneTodos);
      const updatedTodos = [todo, ...todos];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
  }

  function handleEditClick(todo) {

  }

  function handleTodoClick (todo) {
    setTodoPopupOpen(true);
    setSelectedTodo(todo);
  }

  function onAddSubmit(todo) {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    closeAllPopups();
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    const localDoneTodos = JSON.parse(localStorage.getItem('doneTodos'));
    if (localTodos) {
      setTodos(localTodos);
    }

    if (localDoneTodos) {
      setDoneTodos(localDoneTodos);
    }
  }, []);

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
              doneTodos={doneTodos}
              onTodoClick={handleTodoClick}
              onAddButtonClick={openAddPopup}
              onDeleteButtonClick={handleTodoDelete}
              onDoneButtonClick={handleDoneClick}
              onEditButtonClick={handleEditClick}
            />
          }
        />
        <Route
          path="/done-todos"
          element={
            <DoneTodos 
              doneTodos={doneTodos}
              onDeleteButtonClick={handleTodoDelete}
              onDoneButtonClick={handleDoneClick}
              onTodoClick={handleTodoClick}
            />
          }
        />
      </Routes>

      <AddPopup
        isOpen={isAddPopupOpen}
        onSubmit={onAddSubmit}
        onClose={closeAllPopups}
      />

      <TodoPopup
        isOpen={isTodoPopupOpen}
        onClose={closeAllPopups}
        selectedTodo={selectedTodo}
      />
    </>
  );
}

export default App;
