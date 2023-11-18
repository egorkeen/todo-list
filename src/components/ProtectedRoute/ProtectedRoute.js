import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMe } from "../../store/slices/users/users.selectors";

const ProtectedRoute = ({ element: Component, ...props  }) => {
  const user = useSelector(selectMe);
  return (
    user.isAuthorized ? <Component {...props} /> : <Navigate to="/auth" replace/>
)}

export default ProtectedRoute;