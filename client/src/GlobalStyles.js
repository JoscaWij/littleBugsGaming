import React from "react";
import { Global, css } from "@emotion/core";
import GamingFont from "./assets/fonts/VT323-Regular.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        :root {
          --highlight-color: #ff00ff;
        }
        html {
          font-size: 14px;
          color: #fff;
          @font-face {
            font-family: "GamingFont";
            src: url(${GamingFont}) format("truetype");
          }
        }
        body {
          height: 100vh;
          width: 100vw;
        }
        body,
        div {
          margin: 0;
          padding: 0;
          font-family: "GamingFont";
        }
        h1,
        h2 {
          font-family: "GamingFont";
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
};

export default GlobalStyles;
