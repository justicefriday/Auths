import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
export const registerApi = (data) => API.post("/register", data);

export const loginApi = (data) => API.post("/login", data);

export const logoutApi = () => API.delete("/logout");

