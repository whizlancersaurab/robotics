import axios from "axios";


export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});



export const SubscribeCompany = (data) => api.post('/subscribe', data)
export const ContactUs = (data) => api.post('/contactus', data)


