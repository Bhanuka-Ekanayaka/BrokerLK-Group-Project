import axios from "axios";

const API_URL = 'http://localhost:5001';

const userServices = {

  createUser: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/users/create`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserByID: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/users/getuser/${userId}`);
      return response;
    } catch (error) {
      throw new Error('Error fetching User by ID');
    }
  },

  getUserTokenByID: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/users/getUserToken/${userId}`);
      return response;
    } catch (error) {
      throw new Error('Error fetching UserToken by ID');
    }
  },
  
  updateProfile: async (userId, data) => {
    try {
      const response = await axios.put(`${API_URL}/users/profile/${userId}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  verifyPassword: async (userId, data) => {
    try {
      const response = await axios.post(`${API_URL}/users/verifyPW/${userId}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  updatePassword: async (userId, data) => {
    try {
      const response = await axios.put(`${API_URL}/users/changePW/${userId}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

};

export default userServices;