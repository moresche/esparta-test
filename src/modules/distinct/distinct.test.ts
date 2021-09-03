const { countDistincts } = require("./distinct");

test("Should be defined", () => {
    expect(countDistincts).toBeDefined();
});

test(`Should return ${3}`, () => {
    expect(countDistincts([2, 1, 1, 2, 3, 1])).toBe(3);
});
