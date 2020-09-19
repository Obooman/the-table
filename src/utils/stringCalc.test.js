import stringCalc from "./stringCalc";
import { isVariable } from "./getVariable";
import { isFunction, getFunction } from "./getFunctions";

const calc = (str, getVariableValue) =>
  stringCalc(
    str,
    {
      isVariable,
      getVariableValue,
    },
    {
      isFunction,
      getFunction,
    }
  );

describe("number operations", () => {
  it("should get the right result with simple operations", () => {
    expect(calc("1+1")[1]).toBe(2);
    expect(calc("1-1")[1]).toBe(0);
    expect(calc("1*1")[1]).toBe(1);
    expect(calc("1/1")[1]).toBe(1);
    expect(calc("1%1")[1]).toBe(0);
  });

  it("should respect operation priority", () => {
    expect(calc("2*(4+3)")[1]).toBe(14);
    expect(calc("2/(2-1)")[1]).toBe(2);
    expect(calc("2+1*2")[1]).toBe(4);
    expect(calc("2+2%1")[1]).toBe(2);
  });

  it("should respect unary operator", () => {
    expect(calc("-1")[1]).toBe(-1);
    expect(calc("+1")[1]).toBe(1);
    expect(calc("+0.1+-0.2")[1]).toBe(-0.1);
    expect(calc("-0.1-+0.2")[1]).toBe(-0.3);
    expect(calc("-0.1*+0.2")[1]).toBe(-0.02);
    expect(calc("-0.1/-0.2")[1]).toBe(0.5);
  });

  it("should handle complicated expression", () => {
    expect(calc("1+(2+1)*4/12-3%2+4*(9/3)")[1]).toBe(13);
  });

  it("should handle zero properly", () => {
    expect(calc("0+2")[1]).toBe(2);
    expect(calc("0+0.2")[1]).toBe(0.2);
    expect(calc("-0+2")[1]).toBe(2);
    expect(calc("-0+0.2")[1]).toBe(0.2);
  });

  it("should handle float number right", () => {
    expect(calc("2.0*(4.3+3.7)")[1]).toBe(16);
    expect(calc("2.0-4.3*3.7")[1]).toBe(-13.91);
  });

  it("should handle float number accuracy", () => {
    expect(calc("0.1+0.2")[1]).toBe(0.3);
    expect(calc("0.1*0.2")[1]).toBe(0.02);
    expect(calc("-0.3+0.1")[1]).toBe(-0.2);
    expect(calc("1+(2+1.2)*4.2/12-3%2+4*(9.3/3.1)")[1]).toBe(13.12);
  });
});

describe("function calling", () => {
  it("should get sum result successfully", () => {
    expect(calc("SUM(1)")[1]).toBe(1);
    expect(calc("SUM(0)")[1]).toBe(0);
    expect(calc("SUM(0.000)")[1]).toBe(0);
    expect(calc("SUM(1,2)")[1]).toBe(3);
    expect(calc("SUM(0.1,0.2)")[1]).toBe(0.3);
    expect(calc("SUM(0.1,-0.3)")[1]).toBe(-0.2);
    expect(calc("SUM(0.1,-0.3,0.1,0.2)")[1]).toBe(0.1);
  });

  it("should get avg result successfully", () => {
    expect(calc("AVG(1)")[1]).toBe(1);
    expect(calc("AVG(0)")[1]).toBe(0);
    expect(calc("AVG(0.000)")[1]).toBe(0);
    expect(calc("AVG(1,2)")[1]).toBe(1.5);
    expect(calc("AVG(0.1,0.2)")[1]).toBe(0.15);
    expect(calc("AVG(0.1,-0.3)")[1]).toBe(-0.1);
    expect(calc("AVG(0.1,-0.3,0.1,0.2)")[1]).toBe(0.025);
  });

  it("should get along with normal expression", () => {
    expect(calc("SUM(1,2)+3")[1]).toBe(6);
    expect(calc("+SUM(1,2)+3")[1]).toBe(6);
    expect(calc("-SUM(1,2)+3")[1]).toBe(0);
    expect(calc("-1+SUM(2,3)")[1]).toBe(4);
    expect(calc("-0+SUM(0,-0.0)")[1]).toBe(0);
    expect(calc("12+5-SUM(0.1,0.2)*5")[1]).toBe(15.5);
    expect(calc("12+5-(SUM(0.1,0.2)+1)*5")[1]).toBe(10.5);
    expect(calc("0.1+(SUM(1,2)-AVG(1,2)*2+1)*3")[1]).toBe(3.1);
  });

  it("should works with nested expression", () => {
    expect(calc("SUM(AVG(SUM(1,2),5),1)")[1]).toBe(5);
    expect(calc("-0.1+SUM(SUM(1,2),1,AVG(SUM(1,2),5),1)")[1]).toBe(8.9);
  });
});

describe("variables", () => {
  const variables = {
    A11: 11,
    A12: 22,
    A13: 0.3,
    ZZZ999999999: 0.1,
  };

  const getVariableValue = (variableName) => {
    return variables[variableName];
  };

  it("should get result successfully", () => {
    expect(calc("A11", getVariableValue)[1]).toBe(variables.A11);
    expect(calc("A12", getVariableValue)[1]).toBe(variables.A12);
  });
});

// describe("invalid expression");
