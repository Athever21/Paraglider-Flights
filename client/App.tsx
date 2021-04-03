import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader";
import "./style.css";
import styled from "styled-components";

import Loading from "./components/Loading";

const File = lazy(() => import("./components/File"));

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  // const [data, setLink] = use

  return (
    <>
      <Suspense
        fallback={
          <Wrapper>
            <Loading />
          </Wrapper>
        }
      >
        <File />
      </Suspense>
    </>
  );
};

export default hot(module)(App);
