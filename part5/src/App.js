import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
import blogService from "./services/blogs";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

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
      {user === null && (
        <Login onUserChange={setUser} setErrorMessage={setErrorMessage} />
      )}
      {user !== null && blogForm()}
      {user !== null && <button onClick={logout}>logout</button>}
      {user !== null && <CreateBlog updateBlogs={setBlogs} />}
    </div>
  );
};

export default App;
