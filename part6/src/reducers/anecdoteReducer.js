import { createSlice } from "@reduxjs/toolkit";
import anecodoteService from "../services/anecdotes";

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

// const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    addAnecdote: (state, action) => {
      state.push(action.payload);
      return state.sort((a, b) => b.votes - a.votes);
    },
    vote: (state, action) => {
      const anecdoteToChange = state.find((a) => a.id === action.payload.id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      state = state.map((a) =>
        a.id !== action.payload.id ? a : changedAnecdote
      );
      return state.sort((a, b) => b.votes - a.votes);
    },
    setAnecdotes: (state, action) => {
      return action.payload;
    },
  },
});

export const initializeAnecodes = () => {
  return async (dispatch) => {
    const anecdotes = await anecodoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const doVote = (id) => {
  return {
    type: "anecdote/vote",
    payload: { id },
  };
};

export const addAnecdote = (content) => {
  return {
    type: "anecdote/addAnecdote",
    payload: {
      content: content,
      id: getId(),
      votes: 0,
    },
  };
};

export const setAnecdotes = (anecdotes) => {
  return {
    type: "anecdote/setAnecdotes",
    payload: anecdotes,
  };
};

export default anecdoteSlice.reducer;
