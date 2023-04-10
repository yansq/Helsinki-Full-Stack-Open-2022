import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "react-query";
import { getAnecdotes, vote } from "./request";

const App = () => {
  const queryClient = useQueryClient();
  const voteMutation = useMutation(vote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
  });

  const handleVote = (anecdote) => {
    anecdote = { ...anecdote, votes: anecdote.votes + 1 };
    voteMutation.mutate(anecdote);
    console.log("vote");
  };

  const result = useQuery("anecdotes", getAnecdotes);
  console.log(result);

  if (result.isLoading) {
    return <div>loading data...</div>;
  } else if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>;
  }

  const anecdotes = result.data;

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
