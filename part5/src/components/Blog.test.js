import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Blog from "./Blog";

let container;

const blog = {
  title: "test title",
  author: "test author",
  url: "test url",
  likes: 1,
};

beforeEach(() => {
  container = render(<Blog blog={blog} />).container;
});

test("check blog's default displaying", () => {
  const titleElement = screen.getByText(`${blog.title} ${blog.author}`);
  expect(titleElement).toBeDefined();
  const div = container.querySelector(".extra-info");
  expect(div).toHaveStyle("display: none");
});

test("check extra info's displaying when clicking the button", () => {
  userEvent.click(screen.getByText("show"));

  const div = container.querySelector(".extra-info");
  expect(div).not.toHaveStyle("display: none");
});
