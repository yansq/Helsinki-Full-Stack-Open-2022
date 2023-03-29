import { useState } from "react";
import blogsService from "../services/blogs";

const CreateBlog = ({ updateBlogs, setMsg, createFormRef }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [url, setUrl] = useState("");

    const createBlog = async (event) => {
        createFormRef.current.toggleVisibility();
        event.preventDefault();
        const newBlog = {
            title,
            author,
            url,
        };
        await blogsService.create(newBlog);
        const blogs = await blogsService.getAll();
        updateBlogs(blogs);
        setTitle("");
        setAuthor("");
        setUrl("");
        setMsg(`a new blog ${newBlog.title} by ${newBlog.author} added`);
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={createBlog}>
                <div>
                    title:
                    <input
                        type="text"
                        value={title}
                        name="Title"
                        onChange={({ target }) => setTitle(target.value)}
                    />
                </div>
                <div>
                    author:
                    <input
                        type="text"
                        value={author}
                        name="Author"
                        onChange={({ target }) => setAuthor(target.value)}
                    />
                </div>
                <div>
                    url:
                    <input
                        type="text"
                        value={url}
                        name="Url"
                        onChange={({ target }) => setUrl(target.value)}
                    />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    );
};

export default CreateBlog;
