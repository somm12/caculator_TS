import React from "react";
import Calculator from "./Component/Calculator";
import "./App.css";
import styled from "styled-components";

const Box = styled.div`
  height: 90%;
  width: 100%;
`;

const App: React.FC = () => {
  // React.FC : 함수형 컴포넌트라는 것을 알려준다.
  return (
    <Box className="App">
      <Calculator />
    </Box>
  );
};

export default App;
