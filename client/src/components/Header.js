import React from "react";
import styled from "@emotion/styled";
import backgroundImageSrc from "./../assets/backgroundImage_unsplash.jpg";

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
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  padding: 1em;
`;
