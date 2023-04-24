const calculateBmi = (height: number, weight: number) => {
    if (height <= 0) {
        throw new Error('height must be positive');
    }
    if (weight <= 0) {
        throw new Error('weight must be positive');
    }
    console.log((weight / (height / 100 * height / 100)).toFixed(3));
};

try {
    console.log(calculateBmi(174, 63));
} catch (e: unknown) {
    if (e instanceof Error) {
        console.log(e.message);
    }
}
