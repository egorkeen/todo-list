import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import Menu from "./Menu";
import Possibilities from "./Possibilities";
import Main from "./Main";
import AddPopup from "./AddPopup";

function App() {
  
  const [todos, setTodos] = useState([]);
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);

  function openAddPopup() {
    setAddPopupOpen(true);
  };

  function closeAddPopup() {
    setAddPopupOpen(false);
  };

  function handleTodoDelete(todo) {
    const updatedTodos = todos.slice().filter((t) => t !== todo);
    setTodos(updatedTodos);
  }

  function onAddSubmit(todo) {
    setTodos([todo, ...todos]);
    closeAddPopup();
  };



  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Menu/>}
        />
        <Route
          path="/possibilities"
          element={
            <Possibilities />
          } 
        />
        <Route
          path="/main"
          element={
            <Main 
              todos={todos}
              onAddButtonClick={openAddPopup}
              onDeleteButtonClick={handleTodoDelete}
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
