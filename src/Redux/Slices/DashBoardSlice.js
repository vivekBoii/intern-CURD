import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Projects: [],
  status: [],
  NewProjects: [],
};

export const getAllProjects = createAsyncThunk(
  "Project/getAllProjects",
  async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=6"
    );
    return response.json();
  }
);

export const DashBoardSlice = createSlice({
  name: "Project",
  initialState,
  reducers: {
    AddProject: (state, action) => {
      state.NewProjects = [...state.NewProjects, action.payload];
    },
    deleteProject: (state, action) => {
      state.NewProjects = state.NewProjects.filter(
        (_, index) => index !== action.payload
      );
    },
    UpdateProject: (state, action) => {
      const { index, formData } = action.payload;
      const updatedArray = state.NewProjects.map((item, i) =>
        i === index ? { ...item, ...formData } : item
      );
      state.NewProjects = updatedArray;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.Projects = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getAllProjects.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

// Action creators are generated for each case reducer function
export const { AddProject, deleteProject, UpdateProject } =
  DashBoardSlice.actions;

export default DashBoardSlice.reducer;
