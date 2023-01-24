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
  height: 100vh;
  flex-wrap: wrap;
`;
const LeftContainer = styled.div`
  ${DivideHalfScreen};
  background-color: ${theme.navBackColor};
  height: 100vh;
  padding-top: 10rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  >h1{
    color: ${theme.mainButtonHoverColor}
  }
`;

const RightContainer = styled.div`
  ${DivideHalfScreen};
`;

const BackgroundImage = styled.img`
 width: 100%;
 @media (max-width: 1600px) {
  width: 100vw;
  }
`;

export { HomePageContainer, LeftContainer, RightContainer, BackgroundImage };
