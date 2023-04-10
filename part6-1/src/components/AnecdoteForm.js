import { useMutation, useQueryClient } from "react-query";
import { addAnecdote } from "../request";
import { useContext } from "react";
import NoticeContext from "../NoticeContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const newAnecdoteMutation = useMutation(addAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
  });
  const [notice, dispatch] = useContext(NoticeContext);

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log("new anecdote");
    newAnecdoteMutation.mutate({ content, votes: 0 });
    dispatch({
      type: "ADD",
      payload: content,
    });
    setTimeout(() => {
      dispatch({
        type: "RESET",
      });
    }, 5000);
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
