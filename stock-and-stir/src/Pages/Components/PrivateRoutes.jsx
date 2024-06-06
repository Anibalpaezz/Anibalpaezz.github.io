import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
     const { user, loading } = useAuth();

     if (loading) {
          return <div>Loading...</div>; // O cualquier componente de carga que desees mostrar
     }

     return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;