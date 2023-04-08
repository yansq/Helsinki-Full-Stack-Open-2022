import { useSelector, useDispatch } from "react-redux";
import { doVote } from "../reducers/anecdoteReducer";
import { voteNotice } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.filter === ""
      ? state.anecdotes
      : state.anecdotes.filter((a) => a.content.includes(state.filter))
  );
  const dispatch = useDispatch();

  const vote = (id, content) => {
    dispatch(doVote(id));
    dispatch(voteNotice(content));
    setTimeout(() => dispatch(voteNotice("")), 5000);
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
