import canBeNumber from "./canBeNumber";

describe("Normal cases", () => {
  it("should works with normal strings", () => {
    expect(canBeNumber("11")).toBe(true);
    expect(canBeNumber("0")).toBe(true);
    expect(canBeNumber("+0")).toBe(true);
    expect(canBeNumber("-1202")).toBe(true);
    expect(canBeNumber("-0")).toBe(true);
    expect(canBeNumber("-3.1415482392")).toBe(true);
    expect(canBeNumber("-315482392")).toBe(true);
    expect(canBeNumber("-1202e12")).toBe(true);

    expect(canBeNumber("11a")).toBe(false);
    expect(canBeNumber("a0")).toBe(false);
    expect(canBeNumber("+-0")).toBe(false);
    expect(canBeNumber("-3.141.5482392")).toBe(false);
  });

  it("should works with not-string types", () => {
    expect(canBeNumber([])).toBe(false);
    expect(canBeNumber({})).toBe(false);
    expect(canBeNumber(null)).toBe(false);
    expect(canBeNumber()).toBe(false);
    expect(canBeNumber(true)).toBe(false);
    expect(canBeNumber(false)).toBe(false);
    expect(canBeNumber(12)).toBe(true);
  });
});
