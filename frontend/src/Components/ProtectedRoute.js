import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;

/* Purpose: The ProtectedRoute.js file is likely used to create a higher-order component (HOC) that protects certain routes in your React application. 
It ensures that only authenticated users can access specific pages or components.
Reason for Use: When building a web application, you may have certain pages or components that should only be accessible to users who are logged in. 
The ProtectedRoute HOC can check the user's authentication status and either allow access to the protected route or redirect them to a login page
 if they are not authenticated. */