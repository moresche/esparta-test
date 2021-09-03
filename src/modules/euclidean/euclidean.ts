import { INumber } from "../../@types/number";

const countChocolatesEaten = ({ n, m }: INumber): number => {
    const arr: number[] = [];
    let counter = 0,
        index = 0;

    for (let i = 0; i < n; i++) {
        arr.push(counter);
    }

    while (arr[index] === 0) {
        arr[index] = 1;
        index = (index + m) % n;
        counter++;
    }

    return counter;
};

exports.countChocolatesEaten = countChocolatesEaten;
