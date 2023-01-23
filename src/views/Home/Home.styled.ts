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
`;

const RightContainer = styled.div`
  ${DivideHalfScreen};
  height: 100vh;
`;

const BackgroundImage = styled.img`
  max-height: 100vw;
  height: 100vh;
`;

export { HomePageContainer, LeftContainer, RightContainer, BackgroundImage };
