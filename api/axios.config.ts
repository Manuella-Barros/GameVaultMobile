import axios from "axios/index";

export const axiosAPI = axios.create({
    // baseURL: "https://gamevault-api.onrender.com",
    baseURL: "http://10.0.2.2:3000",
})