import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Blog from "./Blog";

test("check blog's default displaying", () => {
  const blog = {
    title: "test title",
    author: "test author",
    url: "test url",
    likes: 1,
  };

  const { container } = render(<Blog blog={blog} />);

  const titleElement = screen.getByText(`${blog.title} ${blog.author}`);
  expect(titleElement).toBeDefined();
  const div = container.querySelector(".extra-info");
  expect(div).toHaveStyle("display: none");
});
