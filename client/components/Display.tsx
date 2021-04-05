import React from "react";
import styled from "styled-components";

interface DisplayProps {
  data: {
    pilot: string;
    glider: string;
    timeStart: string;
    timeStop: string;
    start: string;
    end: string;
    travelTime: string;
  };
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DataDiv = styled.div`
  padding: 0.5rem;
  text-align: center;
`;
const H3 = styled.h3`
  font-size: 1.5rem;
`;

const P = styled.p`
  font-size: 1.2rem;
`;

const Dispaly = ({ data }: DisplayProps) => {
  return (
    <Container>
      <DataDiv>
        <H3>Pilot</H3>
        <P>{data.pilot}</P>
      </DataDiv>
      <DataDiv>
        <H3>Glider</H3>
        <P>{data.glider}</P>
      </DataDiv>
      <DataDiv>
        <H3>Flight Start</H3>
        <P>{data.start}</P>
      </DataDiv>
      <DataDiv>
        <H3>Flight End</H3>
        <P>{data.end}</P>
      </DataDiv>
      <DataDiv>
        <H3>Time Start</H3>
        <P>{data.timeStart}</P>
      </DataDiv>
      <DataDiv>
        <H3>Time End</H3>
        <P>{data.timeStop}</P>
      </DataDiv>
      <DataDiv>
        <H3>Travel Time</H3>
        <P>{data.travelTime}</P>
      </DataDiv>
    </Container>
  );
};

export default Dispaly;
