import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    vote(state, action) {
      return action.payload ? `you voted '${action.payload}'` : "";
    },
    add(state, action) {
      return action.payload ? `you added '${action.payload}'` : "";
    },
  },
});

export const voteNotice = (notification) => {
  return {
    type: "notification/vote",
    payload: notification,
  };
};

export const addNotice = (notification) => {
  return {
    type: "notification/add",
    payload: notification,
  };
};

export default notificationSlice.reducer;
