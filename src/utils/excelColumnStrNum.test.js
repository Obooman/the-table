import {
  numberToColumnString,
  columnStringToNumber,
} from "./excelColumnStrNum";

describe("normal cases", () => {
  it("should works well", () => {
    expect(numberToColumnString(0)).toBe("a");
    expect(columnStringToNumber("a")).toBe(0);
    expect(numberToColumnString(25)).toBe("z");
    expect(columnStringToNumber("z")).toBe(25);
    expect(numberToColumnString(26)).toBe("aa");
    expect(columnStringToNumber("aa")).toBe(26);
    expect(numberToColumnString(675)).toBe("yz");
    expect(columnStringToNumber("yz")).toBe(675);
    expect(numberToColumnString(676)).toBe("za");
    expect(columnStringToNumber("za")).toBe(676);
  });
});
