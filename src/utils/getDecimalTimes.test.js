import getDecimalTimes from "./getDecimalTimes";

describe("Normal cases", () => {
  it("should work as expected", () => {
    expect(getDecimalTimes(0.1)).toBe(1);
    expect(getDecimalTimes(-0.1)).toBe(1);
    expect(getDecimalTimes(1.12)).toBe(2);
    expect(getDecimalTimes(-1.12)).toBe(2);
    expect(getDecimalTimes(0)).toBe(0);
    expect(getDecimalTimes(-0)).toBe(0);
    expect(getDecimalTimes(12)).toBe(0);
    expect(getDecimalTimes(-12)).toBe(0);
  });
});
