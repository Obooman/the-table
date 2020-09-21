import sort from "./sort";

const getValue = (arr) => arr.map((value) => ({ value }));
const mapValue = ({ value }) => value;
const toIncrease = (arr) => sort(getValue(arr), mapValue, true);
const toDecrease = (arr) => sort(getValue(arr), mapValue, false);

describe("Single column sort", () => {
  it("should works with numbers", () => {
    expect(toIncrease([0])).toStrictEqual(getValue([0]));
    expect(toIncrease([1, 2, 3, 4])).toStrictEqual(getValue([1, 2, 3, 4]));
    expect(toDecrease([1, 2, 3, 4])).toStrictEqual(getValue([4, 3, 2, 1]));
    expect(toIncrease([1, -1, 0])).toStrictEqual(getValue([-1, 0, 1]));
    expect(toDecrease([1, -1, 0])).toStrictEqual(getValue([1, 0, -1]));
  });

  it("should works with strings", () => {
    expect(toIncrease(["0", "1", "2"])).toStrictEqual(
      getValue(["0", "1", "2"])
    );
    expect(toDecrease(["0", "1", "2"])).toStrictEqual(
      getValue(["2", "1", "0"])
    );
    expect(toIncrease(["x", "y", "z"])).toStrictEqual(
      getValue(["x", "y", "z"])
    );
    expect(toDecrease(["x", "y", "z"])).toStrictEqual(
      getValue(["z", "y", "x"])
    );
  });

  it("should works with strings mixed up with numbers", () => {
    expect(toIncrease(["1", 2, 3])).toStrictEqual(getValue(["1", 2, 3]));
    expect(toIncrease(["1", "x", 3])).toStrictEqual(getValue(["1", 3, "x"]));
    expect(toIncrease(["y", "x", 1, -1])).toStrictEqual(
      getValue([-1, 1, "x", "y"])
    );
    expect(toDecrease(["y", "x", 1, -1])).toStrictEqual(
      getValue(["y", "x", 1, -1])
    );
  });

  it("should keeps blank always bottom", () => {
    expect(toIncrease(["1", 2, undefined, undefined])).toStrictEqual(
      getValue(["1", 2, undefined, undefined])
    );
    expect(toDecrease(["1", 2, undefined, undefined])).toStrictEqual(
      getValue([2, "1", undefined, undefined])
    );
    expect(
      toIncrease(["1", 2, "x", "y", "", undefined, undefined])
    ).toStrictEqual(getValue(["1", 2, "x", "y", "", undefined, undefined]));
  });
});
