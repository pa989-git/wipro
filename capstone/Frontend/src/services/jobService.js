import axios from "axios";
const API_BASE_URL = "http://localhost:5240/api";

export const getJobs = async () => {
  const response = await axios.get(`${API_BASE_URL}/jobs`);
  return response.data;
};

export const createJob = async (jobData) => {
  const response = await axios.post(`${API_BASE_URL}/jobs`, jobData);
  return response.data;
};

export const deleteJob = async (id) => {
  await axios.delete(`${API_BASE_URL}/jobs/${id}`);
};