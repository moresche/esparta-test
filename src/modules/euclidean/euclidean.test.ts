const { countChocolatesEaten } = require("./euclidean");

test("Should be defined", () => {
    expect(countChocolatesEaten).toBeDefined();
});

test(`Should return ${5}`, () => {
    expect(countChocolatesEaten({ N: 10, M: 4 })).toBe(5);
});
