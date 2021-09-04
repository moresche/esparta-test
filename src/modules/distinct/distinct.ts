export {};

const countDistincts = (A: Array<number>): number => {
    const distinctNumbers: number[] = [];

    A.map((value) =>
        !distinctNumbers.includes(value)
            ? distinctNumbers.push(value)
            : distinctNumbers
    );

    return distinctNumbers.length;
};

exports.countDistincts = countDistincts;
