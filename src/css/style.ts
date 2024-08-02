import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 670px;
  background-color: black;
  justify-content: flex-end;
  padding-bottom: 10px;
  border-radius: 60px;
  width: 370px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;
export const NumButton = styled.button`
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

export const ControlButton = styled.button`
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

export const OperatorButton = styled.button`
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
export const Zero = styled.button`
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

export const Result = styled.input`
  background-color: black;
  color: white;
  border: none;
  font-size: 50px;
  width: 100%;
  text-align: end;
  margin-right: 47px;
`;
export const ResultDiv = styled.div`
  display: flex;
`;
