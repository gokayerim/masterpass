import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: #332454;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const CardWrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  border: 1px solid #cad342;
  border-radius: 6px;
  background-color: #47bf8d;
  width: 500px;
  height: 100px;
  margin: 10px;
`;
const TimerWrapper = styled.strong`
  color: #eee;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

function App() {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      setTimeout(() => setTimer(10), 1000);
    }
  }, [timer]);

  return (
    <Wrapper>
      <Title>MasterPass'e hoş geldiniz</Title>
      <TimerWrapper>Sayaç: {timer}</TimerWrapper>
      <CardWrapper>
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </Wrapper>
  );
}

export default App;
