import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Observable } from "windowed-observable";

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

const fromZF = new Observable("fromZF");
const toZF = new Observable("toZF");

function App() {
  const [timer, setTimer] = useState(10);
  const inputRef = useRef();
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      setTimeout(() => setTimer(10), 1000);
    }
  }, [timer]);

  useEffect(() => {
    fromZF.subscribe(handleMessage);
    return () => {
      fromZF.unsubscribe(handleMessage);
    };
  }, []);
  const handleMessage = (data) => {
    console.log(`this message come from ZF: ${data}`);
  };
  const handleClick = () => {
    toZF.publish("Hello From React");
  };

  return (
    <Wrapper>
      <Title>MasterPass'e hoş geldiniz</Title>
      <TimerWrapper>Sayaç: {timer}</TimerWrapper>
      <CardWrapper>
        <Card />
        <Card />
        <Card />
      </CardWrapper>
      <div>
        <input id="card-num" ref={inputRef} />
        <button type="button" onClick={handleClick}>
          Yolla
        </button>
      </div>
    </Wrapper>
  );
}

export default App;
