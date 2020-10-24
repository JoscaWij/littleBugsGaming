import React from "react";
import styled from "@emotion/styled";
import PlatzhalterImageSrc from "./../assets/Platzhalter.jpg";

const Card = () => {
  return (
    <GameCard>
      <GameCardImage /> hello
    </GameCard>
  );
};

export default Card;

const GameCard = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  width: 20vh;
  height: 20vh;
`;

const GameCardImage = styled.img`
  background-image: url(${PlatzhalterImageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  width: inherit;
  height: inherit;
  z-index: -2;
  position: absolute;
  border-radius: inherit;
`;
