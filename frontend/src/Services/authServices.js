import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Registerform = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    console.log('response data is ',response)
    return response;
  } catch (error) {
    throw error;
  }
};

