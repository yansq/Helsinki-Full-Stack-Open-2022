import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import { CoursePart } from "./interface";

const App = () => {
  const courseName = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Coufusing description",
      backgroundMaterial: "https://sdfksdjfsg.com",
      kind: "background"
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
    }
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total count=
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      />
    </div>
  );
};

export default App;
