import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Backend URL

// Function to send batch requests
export const batchRequest = async (requests) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/batch`, { requests });
    return response.data;
  } catch (error) {
    console.error("Batch API error:", error);
    throw error;
  }
};
