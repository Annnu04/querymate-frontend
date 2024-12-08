import axios from "axios";

// Configure Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:3001/querymate/auth", 
  headers: {
    "Content-Type": "application/json",
  },
});

// Sign-up API call
export const signUpApi = async (formData) => {
  const response = await apiClient.post("/register", formData);
  return response.data; 
};

// Login API call
export const signinApi = async (formData) => {
    const response = await apiClient.post("/login", formData);
    return response.data; 
  };
  