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

export const voteNotice = (notification, time) => {
  return (dispatch) => {
    dispatch(vote(notification));
    setTimeout(() => dispatch(vote("")), time);
  };
};

export const addNotice = (notification, time) => {
  return (dispatch) => {
    dispatch(add(notification));
    setTimeout(() => dispatch(add("")), time);
  };
};

export const { vote, add } = notificationSlice.actions;
export default notificationSlice.reducer;
