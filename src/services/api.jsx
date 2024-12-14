import axios from "axios";

// Configure Axios instance
const apiClient = axios.create({
  baseURL: "https://vercel.com/sanat-kakadiyas-projects/querymate-backend/5cDCjSWaAhki563Wu8HgR6fdEg3v/querymate/", 
  headers: {
    "Content-Type": "application/json",
  },
});

// Sign-up API call
export const signUpApi = async (formData) => {
  const response = await apiClient.post("auth/register", formData);
  return response.data; 
};

// Login API call
export const signinApi = async (formData) => {
  const response = await apiClient.post("auth/login", formData);
  console.log("SignIn...",response)
    return response.data; 
  };
  