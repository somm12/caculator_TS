import React, { useState } from "react";
import { calculate } from "../logic/caculateFunc";
import {
  Wrapper,
  Result,
  ResultDiv,
  ButtonRow,
  NumButton,
  ControlButton,
  OperatorButton,
  Zero,
} from "../css/style";

let stack: (string | number)[] = []; // 연산자 or 숫자 배열.
let activeOperator = false;
let activeNegative = false;
const Calculator: React.FC = () => {
  const [result, setResult] = useState("0");

  const init = () => {
    setResult("0");
    stack = [];
  };
  const pressEqual = () => {
    stack.push(+result);

    const value = calculate(stack);

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
    if (result === "") setResult("0.");
    else setResult((prev) => prev + ".");
  }; // 소수점 입력시.

  const pressNegative = () => {
    activeNegative = !activeNegative;
    setResult((prev) => (+prev * -1).toString());
  };
  const pressOperator = (operator: string) => {
    // 이전까지 입력했던 숫자를 가지고 연산.

    if (stack.length > 0 && typeof stack[stack.length - 1] == "string") return; // 여러번 연산자를 눌렀을 때, 연산이 되지 않도록 하기 위함
    activeOperator = !activeOperator;
    stack.push(+result);

    const value = calculate(stack);

    stack = [value];
    stack.push(operator);
    setResult(value.toString());
  };

  const pressPercentage = () => {
    if (result === "") setResult("0");
    else {
      const value = +result / 100;
      setResult(value.toString());
    }
  };

  return (
    <Wrapper>
      <ResultDiv>
        <Result
          type="string"
          onChange={(e) => setResult(e.target.value)}
          value={result}
          readOnly
        />
      </ResultDiv>
      <div>
        <ButtonRow>
          <ControlButton onClick={init}>C</ControlButton>
          <ControlButton onClick={() => pressNegative()}>+/-</ControlButton>
          <ControlButton onClick={() => pressPercentage()}>%</ControlButton>
          <OperatorButton onClick={() => pressOperator("÷")}>÷</OperatorButton>
        </ButtonRow>
        <ButtonRow>
          <NumButton onClick={() => pressNumber(7)}>7</NumButton>
          <NumButton onClick={() => pressNumber(8)}>8</NumButton>
          <NumButton onClick={() => pressNumber(9)}>9</NumButton>
          <OperatorButton onClick={() => pressOperator("x")}>×</OperatorButton>
        </ButtonRow>
        <ButtonRow>
          <NumButton onClick={() => pressNumber(4)}>4</NumButton>
          <NumButton onClick={() => pressNumber(5)}>5</NumButton>
          <NumButton onClick={() => pressNumber(6)}>6</NumButton>
          <OperatorButton onClick={() => pressOperator("-")}>-</OperatorButton>
        </ButtonRow>
        <ButtonRow>
          <NumButton onClick={() => pressNumber(1)}>1</NumButton>
          <NumButton onClick={() => pressNumber(2)}>2</NumButton>
          <NumButton onClick={() => pressNumber(3)}>3</NumButton>
          <OperatorButton onClick={() => pressOperator("+")}>+</OperatorButton>
        </ButtonRow>
        <ButtonRow>
          <Zero onClick={() => pressNumber(0)}>0</Zero>
          <NumButton onClick={pressPoint}>.</NumButton>
          <OperatorButton onClick={pressEqual}>=</OperatorButton>
        </ButtonRow>
      </div>
    </Wrapper>
  );
};

export default Calculator;
