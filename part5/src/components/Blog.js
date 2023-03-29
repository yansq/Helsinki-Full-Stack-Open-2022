import { useState } from "react";
import blogService from "../services/blogs";

const Blog = ({ blog, updateBlogs }) => {
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
    console.log(updatedBlog);
    await blogService.update(blog._id, updatedBlog);
    const blogs = await blogService.getAll();
    updateBlogs(blogs);
  };

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={() => setIsShowDetail(!isShowDetail)}>
          {isShowDetail ? "hide" : "show"}
        </button>
      </div>
      <div style={hideWhenVisible}>
        <div>{blog.url}</div>
        <div>
          {blog.likes ? blog.likes : 0}
          <button onClick={likeBlog}>like</button>
        </div>
        <div>{blog.user ? blog.user.username : ""}</div>
      </div>
    </div>
  );
};

export default Blog;
