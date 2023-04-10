import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import { addNotice } from "../reducers/notificationReducer";

const NewAnecdote = () => {
    const dispatch = useDispatch();

    const add = (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = "";
        dispatch(addAnecdote(content));
        dispatch(addNotice(content, 5000));
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div>
                    <input name="anecdote" />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    );
};

export default NewAnecdote;
