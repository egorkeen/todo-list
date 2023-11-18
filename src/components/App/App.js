// dependencies
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// components
import Menu from "../Menu/Menu";
import Todos from "../Todos/Todos";
import AddPopup from "../AddPopup/AddPopup";
import TodoPopup from "../TodoPopup/TodoPopup";
import EditPopup from "../EditPopup/EditPopup";
import Auth from "../Auth/Auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// css
import "../../index.css";
import Profile from "../Profile/Profile";
import {setCurrentUser} from "../../store/slices/users/users.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localUserData = localStorage.getItem("me");
    if (localUserData && JSON.parse(localUserData)) {
      dispatch(setCurrentUser(JSON.parse(localUserData)));
    };
  }, []);
  
  return (
    <>
      <Routes>
        <Route
          path="/" 
          element={
            <ProtectedRoute
              element={Menu}
            />
          }
        />
        <Route
          path="/todos" 
          element={
            <ProtectedRoute
              element={Todos}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={Profile}
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
