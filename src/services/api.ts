import axios from "axios";

const baseURL = "http://192.168.1.69:8000"

const api = axios.create({
    baseURL: baseURL,
})

export default api