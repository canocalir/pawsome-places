import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

const DivideHalfScreen = css`
  display: flex;
  flex: 0.5;
  @media (max-width: 1600px) {
    flex: 1;
  }
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const LeftContainer = styled.div`
  ${DivideHalfScreen};
  background-color: ${theme.navBackColor};
  padding-top: 10rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  height: 100vh;
  >h1{
    color: ${theme.mainButtonHoverColor}
  }
`;

const RightContainer = styled.div`
  ${DivideHalfScreen};
  background-color: ${theme.navBackColor};
  justify-content: center;
`;

const BackgroundImage = styled.img`
 height: 100vh;
 @media (max-width: 1600px) {
  height: 100%;
  width: 95vw;
  }
`;

export { HomePageContainer, LeftContainer, RightContainer, BackgroundImage};
