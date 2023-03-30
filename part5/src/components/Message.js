import { useEffect } from "react";

const Message = ({ msg, setMsg }) => {
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  });

  return (
    <div>
      <h2>{msg}</h2>
    </div>
  );
};

export default Message;
