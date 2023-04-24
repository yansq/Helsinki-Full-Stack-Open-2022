import Part from "./Part";
import { CoursePart } from "../interface";

const Content = ({ courseParts }: { courseParts: CoursePart[] }): JSX.Element => {
    return (
        <>
            { courseParts.map((coursePart) => 
                <Part key={coursePart.name} coursePart={coursePart} />) }
        </>
    );
};

export default Content;
