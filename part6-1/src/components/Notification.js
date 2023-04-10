import { useContext } from "react";
import NoticeContext from "../NoticeContext";

const Notification = () => {
  const [notice, dispatch] = useContext(NoticeContext);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  return <div style={style}>{notice}</div>;
};

export default Notification;
