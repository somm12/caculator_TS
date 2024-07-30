import React, { useRef, useState } from "react";
import styled from "styled-components";
import { calculate } from "../logic/caculateFunc";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  font-size: 24px;
`;
let stack: (string | number)[] = [];
let activeOperator = false;
let activeNegative = false;
const Calculator: React.FC = () => {
  const [result, setResult] = useState("0");

  const screenHandler = (inputValue: string) => {
    stack.push(inputValue);
    // 값이 1개면 화면에 표시
    // 값이 3개면 연산해서 화면에 표시 후, 연산 결과 하나만 다시 넣기.
  };
  const init = () => {
    setResult("0");
    stack = [];
  };
  const pressEqual = () => {
    stack.push(+result);

    const value = calculate(stack);
    stack = [value];
    setResult(value.toString());
  };
  const pressNumber = (num: number) => {
    if (activeOperator) {
      setResult("");
      activeOperator = false;
    }
    setResult((prev) => prev + num.toString());
  };
  const pressPoint = () => {
    if (result == "") setResult("0.");
    else setResult((prev) => prev + ".");
  }; // 소수점 입력시.

  const pressNegative = () => {
    activeNegative = !activeNegative;
    setResult((prev) => (+prev * -1).toString());
  };
  const pressOperator = (operator: string) => {
    activeOperator = !activeOperator;
    stack.push(+result);

    const value = calculate(stack);

    stack = [value];
    stack.push(operator);
    setResult(value.toString());
    console.log(stack, value);
  };

  return (
    <Wrapper>
      <div>
        <input
          type="string"
          onChange={(e) => setResult(e.target.value)}
          value={result}
          readOnly
        />
      </div>
      <div>
        <div>
          <Button onClick={init}>C</Button>
          <Button onClick={() => pressNegative()}>+/-</Button>
          <Button onClick={() => pressOperator("%")}>%</Button>
          <Button onClick={() => pressOperator("÷")}>÷</Button>
        </div>
        <div>
          <Button onClick={() => pressNumber(7)}>7</Button>
          <Button onClick={() => pressNumber(8)}>8</Button>
          <Button onClick={() => pressNumber(9)}>9</Button>
          <Button onClick={() => pressOperator("x")}>×</Button>
        </div>
        <div>
          <Button onClick={() => pressNumber(4)}>4</Button>
          <Button onClick={() => pressNumber(5)}>5</Button>
          <Button onClick={() => pressNumber(6)}>6</Button>
          <Button onClick={() => pressOperator("-")}>-</Button>
        </div>
        <div>
          <Button onClick={() => pressNumber(1)}>1</Button>
          <Button onClick={() => pressNumber(2)}>2</Button>
          <Button onClick={() => pressNumber(3)}>3</Button>
          <Button
            // onClick={() => {
            //   // 여러번 누름 방지 필수.
            //   stack.push(result);
            //   const value = calculate(stack);
            //   setResult("");
            //   stack = [value];
            //   stack.push("+");
            //   console.log(stack, value);
            // }}
            onClick={() => pressOperator("+")}
          >
            +
          </Button>
        </div>
        <div>
          <Button onClick={() => pressNumber(0)}>0</Button>
          <Button onClick={pressPoint}>.</Button>
          <Button onClick={pressEqual}>=</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Calculator;
