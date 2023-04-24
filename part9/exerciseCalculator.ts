interface Result {
    periodLength: number,
    trainingDays: number
    success: boolean,
    target: number,
    average: number,
};

const calculateExercises = (times: number[], target: number): Result => {
    const periodLength = times.length;
    let trainingDays = 0;
    let sum = 0;

    for (const time of times) {
        if (time > 0) {
            trainingDays++;
            sum += time;
        }
    }

    return {
        periodLength,
        trainingDays,
        success: sum >= target * periodLength,
        target,
        average: sum / periodLength
    };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
