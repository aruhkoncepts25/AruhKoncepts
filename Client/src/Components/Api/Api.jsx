import axios from "axios";

const api= axios.create({
    baseURL:import.meta.env.VITE_API_URL, // backend ka base url
});

export const Api={
  createContact:(formData)=>api.post("/contactRoute/insert",formData)
}