import React, { useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";

const inputs = css`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1.1rem;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  wdith: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

const Input = styled.input`
  ${inputs}
  border-radius: 10px;
  border: 1px solid #000;
  background: var(--input);
  width: 100%;
`;

const H3 = styled.h3`
  font-size: 2.1rem;
  margin: 0.5rem;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  background: var(--button);
  border: 1px solid var(--button-border);
  ${inputs}
  width: 100%;

  &:hover {
    background: var(--button-hover);
    cursor: pointer;
  }
`;

interface FileProps {
  setData: Function;
  setError: Function;
  setLoading: Function;
}

const File = ({ setData, setError, setLoading }: FileProps) => {
  const [link, setLink] = useState("");

  const handleSubmit = async () => {
    setData({});
    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        `http://localhost:3000/file/from-link`,
        {
          url: link,
        }
      );

      if (data) setLoading(false);
      setData(JSON.parse(data));
    } catch (err) {
      setLoading(false);
      setError(err.response.data.error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <H3>Link to ICG file: </H3>
        <Input
          type="text"
          value={link}
          onChange={({ target }) => setLink(target.value)}
        />
      </Wrapper>
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default File;
