import { INumber } from "../../@types/number";

const countChocolatesEaten = ({ N, M }: INumber): number => {
    const chocolates: number[] = [];
    let counter = 0,
        index = 0;

    for (let i = 0; i < N; i++) {
        chocolates.push(counter);
    }

    while (chocolates[index] === 0) {
        chocolates[index] = 1;
        index = (index + M) % N;
        counter++;
    }

    return counter;
};

exports.countChocolatesEaten = countChocolatesEaten;
