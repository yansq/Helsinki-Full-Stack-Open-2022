import axios from "axios";

export const getAnecdotes = () =>
    axios.get("http://localhost:3001/anecdotes").then((res) => {
        return res.data;
    });

export const addAnecdote = (newAnecdote) => {
    axios.post("http://localhost:3001/anecdotes", newAnecdote).then((res) => {
        return res.data;
    });
};

export const vote = (anecdote) => {
    axios
        .put(`http://localhost:3001/anecdotes/${anecdote.id}`, anecdote)
        .then((res) => {
            return res.data;
        });
};
