import avg from "./avg";

describe("Normal cases", () => {
  it("should return 0 while have no arguments", () => {
    expect(avg()).toBe(0);
  });

  it("should return normal result", () => {
    let numbers = [1, 2, 3, 4];
    expect(avg(...numbers)).toBe(2.5);
  });

  it("should handle string-number mixed input", () => {
    let numbers = ["1", "2", 3, 4];
    expect(avg(...numbers)).toBe(2.5);
  });

  it("should handle all string input", () => {
    let numbers = ["1", "2", "3", "4"];
    expect(avg(...numbers)).toBe(2.5);
  });

  it("can handle negative values", () => {
    let numbers = [-1, -2, 3, 4];
    expect(avg(...numbers)).toBe(1);
  });

  it("can handle undefined as zero", () => {
    let numbers = [1, 2, undefined, 3, 4];
    expect(avg(...numbers)).toBe(2);
  });

  it("should handle empty in sparse array as zero", () => {
    // eslint-disable-next-line no-sparse-arrays
    let numbers = [, , , , 5];
    expect(avg(...numbers)).toBe(1);
  });

  it("should handle object as zero", () => {
    let numbers = [[], new Set(), null, {}, 5];
    expect(avg(...numbers)).toBe(1);
  });

  it("should handle NaN by return NaN", () => {
    let numbers = [NaN, NaN];
    expect(avg(...numbers)).toBe(NaN);
  });
});

describe("Number loss of accuracy", () => {
  it("should auto-correct accuracy issue", () => {
    let numbers = [0.1, 0.2];
    expect(avg(...numbers)).toBe(0.15);
  });

  it("should auto-correct negative floats", () => {
    let numbers = [-0.1, -0.2];
    expect(avg(...numbers)).toBe(-0.15);
  });

  it("should auto-correct both position and negative", () => {
    let numbers = [0.1, -0.3];
    expect(avg(...numbers)).toBe(-0.1);
  });
});
