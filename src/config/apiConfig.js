import axios from "axios";

export const API_BASE_URL = "https://delicious-stamp-production.up.railway.app";

console.log(API_BASE_URL);
const jwt = localStorage.getItem("jwt");
export const api = axios.create({
    baseURL: "https://delicious-stamp-production.up.railway.app",
    headers: {
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': "application/json"
    }
})


