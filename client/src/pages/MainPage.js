import React from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";

const MainPage = () => {
  return (
    <CardContainer>
      <Card />
      <Card />
      <Card />
      <Card />
    </CardContainer>
  );
};

export default MainPage;

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
