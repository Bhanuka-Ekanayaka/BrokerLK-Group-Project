import axios from 'axios';

export const apiRequest = axios.create({
    baseURL:"http://localhost:26792/api",
    withCredentials:true,
})