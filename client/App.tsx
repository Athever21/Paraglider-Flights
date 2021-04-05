import React, { lazy, Suspense, useState } from "react";
import { hot } from "react-hot-loader";
import "./style.css";
import styled from "styled-components";

import Loading from "./components/Loading";

const File = lazy(() => import("./components/File"));
const Display = lazy(() => import("./components/Display"));

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Error = styled.h2`
  text-align: center;
  font-size: 5rem;
  margin-top: 1rem;
  color: var(--error);
`;

const Container = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const App = () => {
  const [data, setData] = useState({} as any);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Suspense
        fallback={
          <Wrapper>
            <Loading />
          </Wrapper>
        }
      >
        <File setData={setData} setError={setError} setLoading={setLoading} />
      </Suspense>
      {loading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
        <Suspense
          fallback={
            <Container>
              <Loading />
            </Container>
          }
        >
          {data.pilot && <Display data={data} />}
          {error && (
            <Container>
              <Error>{error}</Error>
            </Container>
          )}
        </Suspense>
      )}
    </>
  );
};

export default hot(module)(App);
