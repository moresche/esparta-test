const { countChocolatesEaten } = require("./euclidean");

test("Should be defined", () => {
    expect(countChocolatesEaten).toBeDefined();
});

test(`Should return ${5}`, () => {
    expect(countChocolatesEaten({ n: 10, m: 4 })).toBe(5);
});
