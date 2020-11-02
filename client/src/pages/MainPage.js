import React from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";
import SpaceyImageSrc from "../assets/images/Spacey.png";

const MainPage = () => {
  return (
    <CardContainer>
      <Card imageSrc={""} gameName="GAME" isReady={false} />
      <Card imageSrc={""} gameName="GAME" isReady={false} />
      <Card imageSrc={""} gameName="GAME" isReady={false} />
      <Card imageSrc={SpaceyImageSrc} gameName="Spacey" isReady={true} />
    </CardContainer>
  );
};

export default MainPage;

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
