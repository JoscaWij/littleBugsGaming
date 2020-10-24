import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Card = ({ imageSrc, gameName }) => {
  return (
    <GameCard>
      <GameCardImage src={imageSrc} /> {gameName}
      <ComingSoonBadge>Coming soon</ComingSoonBadge>
    </GameCard>
  );
};

export default Card;

Card.propTypes = {
  imageSrc: PropTypes.string,
  gameName: PropTypes.string,
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
  width: 25vh;
  height: 25vh;
`;

const GameCardImage = styled.img`
  background-image: url({${(props) => props.src}});
  background-size: cover;
  background-repeat: no-repeat;
  width: inherit;
  height: inherit;
  z-index: -2;
  position: absolute;
  border-radius: inherit;
`;

const ComingSoonBadge = styled.span`
  border-radius: inherit;
  font-size: bold;
  letter-spacing: 0;
  z-index: 2;
  position: absolute;
  background-color: rgba(180, 180, 180, 0.7);
  transform: rotate(-15deg);
  padding: 0.3em;
  border: #fff 2px solid;
`;
