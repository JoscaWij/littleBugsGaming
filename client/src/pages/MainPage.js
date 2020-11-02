import React from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";

const MainPage = () => {
  return (
    <CardContainer>
      <Card imageSrc={""} gameName="GAME" isReady={false} />
      <Card imageSrc={""} gameName="GAME" isReady={false} />
      <Card imageSrc={""} gameName="GAME" isReady={false} />
      <Card imageSrc={""} gameName="GAME" isReady={false} />
    </CardContainer>
  );
};

export default MainPage;

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
