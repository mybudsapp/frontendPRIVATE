import axios from "axios";

let token = localStorage.token

const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1/"
})

instance.defaults.headers.post['Authorization'] = token

export default instance;
