import axios from "axios";

const apiURL = "http://localhost:8000"

const api = axios.create({
    baseURL: apiURL,
    timeout: 3000
})

export default api