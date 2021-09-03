export {};

const getUnpaired = (a: Array<number>): number => {
    const elements = {};

    a.map((value) =>
        !elements.hasOwnProperty(value)
            ? (elements[value] = 1)
            : elements[value]++
    );

    for (const element in elements) {
        if (elements[element] % 2 !== 0) {
            return Number(element);
        }
    }
};

exports.getUnpaired = getUnpaired;
