import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const Loginform = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {email, password});
    return response;
  } catch (error) {
      throw error;
  }
};

export const Registerform = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
      return response;
  } catch (error) {
        throw error;
  }
};


const forgotPassword = async (formData) => {
  try {
      const response=  await axios.post(`${API_URL}/forgot-password`, formData);
      return response.data;
  } catch (error) {
      console.error('Error in resetPassword:', error);
      throw(error);
  }
}

export { forgotPassword };

/* Purpose: The AuthService.js file likely contains functions and methods related to authentication, 
such as login, logout, and registration functionality. It may also handle interactions with an authentication API or manage authentication tokens.
Reason for Use: Separating authentication-related logic into a service file helps keep your code modular and maintainable. 
This file can be imported into various components that need to interact with the authentication system. 
It allows you to centralize the authentication logic, making it easier to update and maintain. */