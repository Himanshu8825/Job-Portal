import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    allJobs: [],
    adminAllJobs: [],
    singleJob: null,
    searchJobByText: '',
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAdminAllJobs: (state, action) => {
      state.adminAllJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJob, setAdminAllJobs , setSearchJobByText } = jobSlice.actions;

export default jobSlice.reducer;
