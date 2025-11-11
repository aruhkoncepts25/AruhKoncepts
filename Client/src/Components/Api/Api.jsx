
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL // e.g. http://localhost:4000 or https://aruhkoncepts.onrender.com
});

export const Api = {
  createContact: (formData) => api.post("/contactRoute/insert", formData)
};
