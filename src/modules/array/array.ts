export {};

const getUnpaired = (A: Array<number>): number => {
    for (let i = 0; i < A.length; i++) {
        const unpairedNumber = A.filter((number) => number === A[i]);

        if (unpairedNumber.length % 2 === 1) {
            return A[i];
        }
    }
};

exports.getUnpaired = getUnpaired;
