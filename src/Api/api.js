import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:7112',
});

export default api;