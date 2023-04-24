import { CoursePart } from "../interface";

const Part = ({ coursePart } : { coursePart: CoursePart }) => {
    const assertNever = (value: never): never => {
        throw new Error(
            `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
    };

    switch (coursePart.kind) {
        case "group":
            return (
                <div>
                    <h3>{coursePart.name}</h3>
                    <p>exerciseCount: {coursePart.exerciseCount}</p>
                    <p>groupProjectCount: {coursePart.groupProjectCount}</p>
                </div>
            );

        case "background":
            return (
                <div>
                    <h3>{coursePart.name}</h3>
                    <p>exerciseCount: {coursePart.exerciseCount}</p>
                    <p>description: {coursePart.description}</p>
                    <p>backgroudMaterial: {coursePart.backgroundMaterial}</p>
                </div>
            );
        case "basic":
            return (
                <div>
                    <h3>{coursePart.name}</h3>
                    <p>exerciseCount: {coursePart.exerciseCount}</p>
                    <p>description: {coursePart.description}</p>
                </div>
            );
        case "special":
            return (
                <div>
                    <h3>{coursePart.name}</h3>
                    <p>exerciseCount: {coursePart.exerciseCount}</p>
                    <p>description: {coursePart.description}</p>
                    <p>requirements: {coursePart.requirements.join(", ")}</p>
                </div>
            );
        default:
            assertNever(coursePart);
            return null;
    }
};

export default Part;
