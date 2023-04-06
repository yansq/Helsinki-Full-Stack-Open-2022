import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const doFilter = (filter) => {
  return {
    type: "filter/setFilter",
    payload: filter,
  };
};

export default filterSlice.reducer;
