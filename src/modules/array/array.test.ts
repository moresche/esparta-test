const { getUnpaired } = require("./array");

test("Should be defined", () => {
    expect(getUnpaired).toBeDefined();
});

test(`Should return ${7}`, () => {
    expect(getUnpaired([9, 3, 9, 3, 9, 7, 9])).toBe(7);
});
