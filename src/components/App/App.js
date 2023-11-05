import { Routes, Route } from "react-router-dom";
import "../../index.css";
import Menu from "../Menu/Menu";
import Todos from "../Todos/Todos";
import AddPopup from "../AddPopup/AddPopup";
import TodoPopup from "../TodoPopup/TodoPopup";
import EditPopup from "../EditPopup/EditPopup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
      
      <AddPopup />
      <TodoPopup />
      <EditPopup />
    </>
  );
}

export default App;
