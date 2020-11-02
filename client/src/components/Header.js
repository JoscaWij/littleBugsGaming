import React from "react";
import styled from "@emotion/styled";
import backgroundImageSrc from "./../assets/images/backgroundImage_unsplash.jpg";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>
        Little Buggs Gaming
        <span>A little playground for gaming ideas</span>
      </Title>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-image: url(${backgroundImageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  width: 100%;
  text-align: center;
`;

const Title = styled.div`
  padding: 1em;
  font-size: 2em;
  font-weight: bold;
  font-family: "GamingFont";
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 100%;

  > * {
    font-size: 0.5em;
    flex-basis: 100%;
  }
`;
