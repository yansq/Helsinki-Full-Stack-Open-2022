import { createContext, useReducer } from "react";

const noticeReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return `anecode '${action.payload}' added`;
        case "VOTE":
            return `anecode '${action.payload}' voted`;
        case "RESET":
            return "";
        case "ERROR":
            return "too short anecdote, must have length 5 or more";
        default:
            return state;
    }
};

const NoticeContext = createContext();

export const NoticeContextProvider = (props) => {
    const [notice, noticeDispatch] = useReducer(noticeReducer, "");

    return (
        <NoticeContext.Provider value={[notice, noticeDispatch]}>
            {props.children}
        </NoticeContext.Provider>
    );
};

export default NoticeContext;
