import * as acorn from "acorn";
import getDecimalTimes from "./getDecimalTimes";

const types = {
  ExpressionStatement: true,
  BinaryExpression: true,
  UnaryExpression: true,
  CallExpression: true,
  Literal: true,
  Identifier: true,
};

const operators = {
  addition: "addition",
  subtraction: "subtraction",
  multiplication: "multiplication",
};

const getArithmeticResult = (a, b, operator) => {
  const timeValue = Math.pow(
    10,
    Math.max(getDecimalTimes(a), getDecimalTimes(b))
  );

  switch (operator) {
    case operators.addition:
      return (a * timeValue + b * timeValue) / timeValue;
    case operators.subtraction:
      return (a * timeValue - b * timeValue) / timeValue;
    case operators.multiplication:
      return (a * timeValue * b * timeValue) / timeValue / timeValue;
    default:
      throw new Error("Invalid arithmetic operator");
  }
};

export default function calculate(
  parseString,
  { isVariable, getVariableValue },
  { isFunction, getFunction }
) {
  try {
    const value = getValue(
      acorn.parse(parseString, {
        ecmaVersion: 2020,
      }).body[0].expression
    );
    return [false, value];
  } catch (syntaxError) {
    return [syntaxError, 0];
  }

  function getValue(block) {
    if (!types[block.type]) {
      throw new Error("Unsupported syntax block" + block.type);
    }

    if (block.type === "Literal") {
      if (!/\d+/.test(block.value)) {
        throw new Error("invalid literal value");
      }

      return block.value;
    }

    if (block.type === "UnaryExpression") {
      if (!/\+|-/.test(block.operator)) {
        throw new Error("Invalid Unary Expression");
      }

      return block.operator === "+"
        ? getValue(block.argument)
        : -getValue(block.argument);
    }

    if (block.type === "BinaryExpression") {
      let rightHandNumber = getValue(block.right);
      switch (block.operator) {
        case "+":
          return getArithmeticResult(
            getValue(block.left),
            getValue(block.right),
            operators.addition
          );
        case "-":
          return getArithmeticResult(
            getValue(block.left),
            getValue(block.right),
            operators.subtraction
          );
        case "*":
          return getArithmeticResult(
            getValue(block.left),
            getValue(block.right),
            operators.multiplication
          );
        case "/":
          if (rightHandNumber === 0) {
            throw new Error("Got 0 as division");
          }
          return getValue(block.left) / rightHandNumber;
        case "%":
          if (rightHandNumber === 0) {
            throw new Error("Got 0 as division");
          }
          return getValue(block.left) % rightHandNumber;
        default:
          throw new Error("Unknown operator detected");
      }
    }

    if (block.type === "CallExpression") {
      const functionName = block.callee.name;
      if (isFunction(functionName)) {
        return getFunction(functionName).apply(
          this,
          block.arguments.map((block) => {
            return getValue(block);
          })
        );
      } else {
        throw new Error("calling unknown inset function");
      }
    }

    if (block.type === "Identifier") {
      if (isVariable(block.name)) {
        return getVariableValue(block.name);
      }

      throw new Error("using undefined variable");
    }
  }
}
