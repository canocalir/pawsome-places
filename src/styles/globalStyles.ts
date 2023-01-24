import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${theme.mainBackColor};
        position: relative;
    }
`;
