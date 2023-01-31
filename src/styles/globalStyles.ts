import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export const MainHeading = css`
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.3rem;
  color: ${theme.mainButtonHoverColor};
`;

export const Flex = css`
  display: flex;
  flex-wrap: wrap;
`;

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${theme.mainBackColor};
        position: relative;
        height: 100vh;
    }
`;
