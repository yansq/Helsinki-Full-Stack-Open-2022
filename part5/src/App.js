import { useState, useEffect, useRef } from "react";
import Blog from "./components/Blog";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
import Message from "./components/Message";
import Togglable from "./components/commons/Togglable";
import blogService from "./services/blogs";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("");

  const createFormRef = useRef();

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      updateBlogs(blogs);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const updateBlogs = (blogs) => {
    blogs.sort((a, b) => {
      !a.likes ? 1 : !b.likes ? -1 : b.likes - a.likes;
    });
    setBlogs(blogs);
  };

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
          <Blog
            key={blog._id}
            blog={blog}
            updateBlogs={updateBlogs}
            user={user}
          />
        ))}
      </div>
    );
  };

  const createForm = () => {
    return (
      <Togglable buttonLabel="new blog" ref={createFormRef}>
        <CreateBlog
          updateBlogs={updateBlogs}
          setMsg={setMsg}
          createFormRef={createFormRef}
        />
      </Togglable>
    );
  };

  return (
    <div>
      <Message msg={msg} setMsg={setMsg} />
      {user === null && <Login onUserChange={setUser} setMsg={setMsg} />}
      {user !== null && blogForm()}
      {user !== null && createForm()}
      {user !== null && <button onClick={logout}>logout</button>}
    </div>
  );
};

export default App;
