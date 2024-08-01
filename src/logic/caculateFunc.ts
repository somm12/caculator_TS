const calculate = (stack: (string | number)[]): number => {
  if (stack.length === 1) {
    return stack[0] as number;
  }
  // 길이가 3.
  let result = 0;
  const op2 = stack.pop() as number;
  const operator = stack.pop();
  const op1 = stack.pop() as number;

  switch (operator) {
    case "+":
      result = op1 + op2;
      break;
    case "-":
      result = op1 - op2;
      break;
    case "÷":
      result = op1 / op2;
      break;
    case "x":
      result = op1 * op2;
      break;
  }
  return result;
};
export { calculate };
