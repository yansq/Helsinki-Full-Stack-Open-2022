import { useState } from "react";
import blogService from "../services/blogs";

const Blog = ({ blog, updateBlogs, user }) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const hideWhenVisible = { display: isShowDetail ? "" : "none" };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "1px solid black",
    borderWidth: 1,
    marginBottom: 5,
  };

  const likeBlog = async () => {
    const updatedBlog = {
      ...blog,
      likes: blog.likes ? blog.likes + 1 : 1,
    };
    await blogService.update(blog._id, updatedBlog);
    const blogs = await blogService.getAll();
    updateBlogs(blogs);
  };

  const removeBlog = async () => {
    if (window.confirm(`Remove ${blog.title} by ${blog.author}`)) {
      await blogService.remove(blog._id);
      const blogs = await blogService.getAll();
      updateBlogs(blogs);
    }
  };

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={() => setIsShowDetail(!isShowDetail)}>
          {isShowDetail ? "hide" : "show"}
        </button>
      </div>
      <div className="extra-info" style={hideWhenVisible}>
        <div>{blog.url}</div>
        <div>
          {blog.likes ? blog.likes : 0}
          <button onClick={likeBlog}>like</button>
        </div>
        <div>{blog.user ? blog.user.username : ""}</div>
        {blog.user && blog.user.username === user.username && (
          <div>
            <button onClick={removeBlog}>remove</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
