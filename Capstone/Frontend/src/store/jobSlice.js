import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getJobs } from "../services/jobService";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  return await getJobs();
});
const jobSlice = createSlice({
    name: "jobs",
    initialState: { jobs: [] },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
      });
    },
  });
  export default jobSlice.reducer;