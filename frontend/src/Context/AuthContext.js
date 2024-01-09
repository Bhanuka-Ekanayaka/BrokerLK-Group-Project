import { createContext, useContext, useState } from 'react';
import { login as loginApi } from '../Services/authServices';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (formData) => {
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
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);