import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.TaskId === action.payload.TaskId);
      if (index !== -1) state.tasks[index] = action.payload;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.TaskId !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
