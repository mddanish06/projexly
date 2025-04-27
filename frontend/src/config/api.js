import axios from "axios";

export const API_BASE_URL = "https://projexly-production-d1f5.up.railway.app";
// export const API_BASE_URL = "http://localhost:8080";
// export const API_BASE_URL = "https://project-management-server-production-f25b.up.railway.app";

const api = axios.create({
  baseURL: API_BASE_URL,
});

const jwt = localStorage.getItem("jwt");

api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
api.defaults.headers.post["Content-Type"] = "application/json";

export default api;
