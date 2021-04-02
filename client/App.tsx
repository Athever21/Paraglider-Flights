import React from "react";
import { hot } from "react-hot-loader";
import "./style.css";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const H1 = styled.h1`
  font-size: 10rem;
  color: #730071;
`

const App = () => {
  return (
    <Container>
      <H1>Hello world!</H1>
    </Container>
  );
};

export default hot(module)(App);
