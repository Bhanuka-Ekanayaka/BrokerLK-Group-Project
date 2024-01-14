import { createContext, useContext, useState } from 'react';
import { Loginform as loginApi } from '../Services/authServices';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const Loginform = async (formData) => {
    try {
      const response = await loginApi(formData);
      if (response.success) {
        setUser({ username: formData.username, token: response.token });
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, Loginform, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


/* Purpose: The AuthContext.js file typically defines a React context that provides information about the authentication status 
of the user to components throughout the application.
Reason for Use: Managing authentication state across different components can be challenging. 
The AuthContext allows you to create a centralized place to store and update the authentication state. 
Components that need access to this information can subscribe to the context, making it easier to handle scenarios like displaying 
different UI elements based on whether a user is authenticated. */