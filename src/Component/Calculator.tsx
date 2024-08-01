import React, { useState } from "react";
import styled from "styled-components";
import { calculate } from "../logic/caculateFunc";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 670px;
  background-color: black;
  justify-content: flex-end;
  padding-bottom: 10px;
  border-radius: 60px;
  width: 370px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;
const NumButton = styled.button`
  font-size: 24px;
  border-radius: 50%;
  height: 72px;
  width: 72px;
  margin: 3px 3px;
  background-color: #343434;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    background-color: gray;
  }
`;

const ControlButton = styled.button`
  font-size: 24px;
  border-radius: 50%;
  height: 72px;
  width: 72px;
  margin: 3px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a5a5a5;
  &:hover {
    background-color: lightgray;
  }
`;

const OperatorButton = styled.button`
  background-color: #ff9f0a;

  font-size: 34px;
  border-radius: 50%;
  height: 72px;
  width: 72px;
  margin: 3px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    background-color: white;
    color: #ff9f0a;
  }
`;
const Zero = styled.button`
  font-size: 24px;
  border-radius: 35px;
  height: 72px;
  width: 145px;
  margin-right: 10px;
  text-align: left;
  padding-left: 32px;
  display: flex;

  align-items: center;
  color: white;
  background-color: #343434;
  &:hover {
    background-color: lightgray;
  }
`;

const Result = styled.input`
  background-color: black;
  color: white;
  border: none;
  font-size: 50px;
  width: 100%;
  text-align: end;
  margin-right: 47px;
`;
const ResultDiv = styled.div`
  display: flex;
`;

let stack: (string | number)[] = [];
let activeOperator = false;
let activeNegative = false;
const Calculator: React.FC = () => {
  const [result, setResult] = useState("0");
  const [operatorActive, setOperatorActive] = useState(false);

  const init = () => {
    setResult("0");
    stack = [];
    setOperatorActive(false);
  };
  const pressEqual = () => {
    stack.push(+result);

    const value = calculate(stack);

    setResult(value.toString());
    setOperatorActive(false);
  };
  const pressNumber = (num: number) => {
    if (activeOperator) {
      setResult("");
      activeOperator = false;
    }
    setResult((prev) => prev + num.toString());
    setOperatorActive(false);
  };
  const pressPoint = () => {
    if (result === "") setResult("0.");
    else setResult((prev) => prev + ".");
    setOperatorActive(false);
  }; // 소수점 입력시.

  const pressNegative = () => {
    activeNegative = !activeNegative;
    setResult((prev) => (+prev * -1).toString());
  };
  const pressOperator = (operator: string) => {
    // 이전까지 입력했던 숫자를 가지고 연산.
    // 여러번 연산자를 눌렀을 때, 연산이 되지 않도록 하기 위함
    if (stack.length > 0 && typeof stack[stack.length - 1] == "string") return;
    activeOperator = !activeOperator;
    stack.push(+result);

    const value = calculate(stack);

    stack = [value];
    stack.push(operator);
    setResult(value.toString());

    setOperatorActive(true);
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
