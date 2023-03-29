import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
import Message from "./components/Message";
import blogService from "./services/blogs";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const logout = () => {
    window.localStorage.clear();
    setUser(null);
  };

  const blogForm = () => {
    return (
      <div>
        <h2>blogs</h2>
        <div>{user.username} logged in</div>
        <br />
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Message msg={msg} setMsg={setMsg} />
      {user === null && <Login onUserChange={setUser} setMsg={setMsg} />}
      {user !== null && blogForm()}
      {user !== null && <button onClick={logout}>logout</button>}
      {user !== null && <CreateBlog updateBlogs={setBlogs} setMsg={setMsg} />}
    </div>
  );
};

export default App;
