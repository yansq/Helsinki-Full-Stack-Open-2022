interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface CoursePartBase2 extends CoursePartBase {
    description: string;
}

interface CoursePartBasic extends CoursePartBase2 {
    kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
}

interface CoursePartBackground extends CoursePartBase2 {
    backgroundMaterial: string;
    kind: "background"
}

interface CoursePartSpecial extends CoursePartBase2 {
    requirements: string[];
    kind: "special"
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;
