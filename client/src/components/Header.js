import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Welcome</Title>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: grey;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  padding: 1em;
`;
