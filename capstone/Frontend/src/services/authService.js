import axios from "axios";

const API_URL = "http://localhost:5240/api/auth/"; // Update with your backend URL

// Register User
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data :"Registration failed";
  }
};

// Login User
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}login`, credentials);
    const { token } = response.data;

    // Store token in localStorage
    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Login failed";
  }
};

// Logout User
export const logout = () => {
  localStorage.removeItem("token");
};

// Get Token (for authenticated requests)
export const getToken = () => {
  return localStorage.getItem("token");
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // Returns true if token exists
};
