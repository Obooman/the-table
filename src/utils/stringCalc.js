import * as acorn from "acorn";

const types = {
  ExpressionStatement: true,
  BinaryExpression: true,
  CallExpression: true,
  Literal: true,
};

const insetFunctions = {
  sum(...numbers) {
    let index = 0;
    let sum = 0;
    while (index < numbers.length) {
      sum += numbers[index];
      index++;
    }
    return sum;
  },
  avg(...numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    return insetFunctions.sum(...numbers) / numbers.length;
  },
};

export default function calculate(
  parseString,
  { isVariable, getVariableValue },
  { isFunction, getFunction }
) {
  let error = false;

  try {
    return [
      error,
      getValue(
        acorn.parse(parseString, {
          ecmaVersion: 2020,
        }).body[0].expression
      ),
    ];
  } catch (syntaxError) {
    return [true, 0];
  }

  function getValue(block) {
    if (error) {
      return;
    }

    if (!types[block.type]) {
      error = true;
    }

    if (block.type === "Literal") {
      return block.value;
    }

    if (block.type === "BinaryExpression") {
      let rightHandNumber = getValue(block.right);
      switch (block.operator) {
        case "+":
          return getValue(block.left) + getValue(block.right);
        case "-":
          return getValue(block.left) - getValue(block.right);
        case "*":
          return getValue(block.left) * getValue(block.right);
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
      } else {
        throw new Error("using undefined variable");
      }
    }
  }
}
