import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../../index.css";
import Menu from "../Menu/Menu";
import Todos from "../Todos/Todos";
import AddPopup from "../AddPopup/AddPopup";
import TodoPopup from "../TodoPopup/TodoPopup";
import EditPopup from "../EditPopup/EditPopup";
import Auth from "../Auth/Auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  return (
    <>
      <Routes>
        <Route
          path="/" 
          element={
            <ProtectedRoute
              element={<Menu />}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/todos" 
          element={
            <ProtectedRoute 
              element={<Todos />}
              isLoggedIn={isLoggedIn}
            />  
          }
        />

        <Route path="/auth" element={<Auth />} />

      </Routes>
      
      <AddPopup />
      <TodoPopup />
      <EditPopup />
    </>
  );
}

export default App;
