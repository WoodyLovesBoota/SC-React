import React from "react";
import styled from "styled-components";
import Wallet from "./components/Wallet";
import Contents from "./components/Contents";

function App() {
  return (
    <Wrapper>
      <Header>
        <Title>Main</Title>
        <Wallet />
      </Header>
      <Contents />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  color: white;
  text-shadow: 0 0 5px #32ff7e, 0 0 25px #32ff7e, 0 0 50px #32ff7e, 0 0 100px #32ff7e;
`;
