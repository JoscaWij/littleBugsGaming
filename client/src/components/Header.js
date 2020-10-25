import React from "react";
import styled from "@emotion/styled";
import backgroundImageSrc from "./../assets/images/backgroundImage_unsplash.jpg";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Welcome</Title>
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
  font-weight: bolder;
  font-size: 2em;
`;
