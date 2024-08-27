import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthConext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(user)
  if (!user) {
    return <Navigate to="/prelogin" />;
  }

  return children;
};

export default ProtectedRoute;
