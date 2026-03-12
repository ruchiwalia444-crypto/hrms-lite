import axios from "axios";

const API = axios.create({
    baseURL:"https://hrms-lite-hct0.onrender.com/api/"
});

export default API;