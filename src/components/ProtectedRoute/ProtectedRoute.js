import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props  }) => {
  return (
    props.isloggedIn ? <Component {...props} /> : <Navigate to="/auth" replace/>
)}

export default ProtectedRoute;