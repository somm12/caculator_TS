const division = () => {
  return 1;
};

const multiply = () => {};

const minus = () => {};

const add = () => {};

const showResult = () => {};

const calculate = (stack: (string | number)[]): number => {
  if (stack.length === 1) {
    return stack[0] as number;
  }
  // 길이가 3.
  let result = 0;
  const op2 = stack.pop() as number;
  const operator = stack.pop();
  const op1 = stack.pop() as number;
  if (operator == "+") result = op1 + op2;
  else if (operator == "-") result = op1 - op2;
  else if (operator == "÷") result = op1 / op2;
  else if (operator == "x") result = op1 * op2;
  console.log(op1, op2);
  return result;
};
export { calculate, division, multiply, minus, add, showResult };
