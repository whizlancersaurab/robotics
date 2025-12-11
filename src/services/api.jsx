import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "http://localhost:3000/api";


export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const SubscribeCompany = (data) => api.post("/subscribe", data);
export const ContactUs = (data) => api.post("/contactus", data);
export const EnrollMent = (data)=>api.post("/enroll" , data)
export const Registration = (data)=>api.post("/eventreg" , data)
