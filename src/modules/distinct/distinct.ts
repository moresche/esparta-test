export {};

const countDistincts = (a: Array<number>): number => {
    const distinctNumbers: number[] = [];

    a.map((value) =>
        !distinctNumbers.includes(value)
            ? distinctNumbers.push(value)
            : distinctNumbers
    );

    return distinctNumbers.length;
};

exports.countDistincts = countDistincts;
