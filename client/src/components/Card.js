import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { ComingSoonBadge } from "./ComingSoonBadge";

const Card = ({ imageSrc, gameName, isReady }) => {
  return (
    <GameCard>
      <GameCardImage src={imageSrc} /> {gameName}
      {!isReady && <ComingSoonBadge>Coming soon</ComingSoonBadge>}
    </GameCard>
  );
};

export default Card;

Card.propTypes = {
  imageSrc: PropTypes.string,
  gameName: PropTypes.string,
  isReady: PropTypes.bool,
};

const GameCard = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  font-weight: bolder;
  color: #fff;
  letter-spacing: 0.2em;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: solid #fff 2px;
  margin: 1em;
  width: 30vh;
  height: 30vh;
`;

const GameCardImage = styled.img`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: inherit;
  height: inherit;
  z-index: -2;
  position: absolute;
  border-radius: inherit;
`;
