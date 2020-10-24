import React from "react";
import styled from "@emotion/styled";
import PlatzhalterImageSrc from "./../assets/Platzhalter.jpg";

const Card = () => {
  return <GameCard>hello</GameCard>;
};

export default Card;

const GameCard = styled.div`
  background-image: url(${PlatzhalterImageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  width: 20vh;
  height: 20vh;
`;
