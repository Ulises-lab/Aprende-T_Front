import axios from "axios";


const isProduction = process.env.NODE_ENV === 'production'

const baseURL = isProduction ? 'https://aprende-t-back.herokuapp.com/api' : 'http://localhost:5005/api';

export const api = axios.create({
    baseURL: 'https://aprende-t-back.herokuapp.com/api',
    withCredentials: true,
    timeout: 10000
})

export default api;