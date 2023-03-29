import { useState } from "react";

const Blog = ({ blog }) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const hideWhenVisible = { display: isShowDetail ? "" : "none" };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "1px solid black",
    borderWidth: 1,
    marginBottom: 5,
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
          <button>like</button>
        </div>
        <div>{blog.user ? blog.user.username : ""}</div>
      </div>
    </div>
  );
};

export default Blog;
