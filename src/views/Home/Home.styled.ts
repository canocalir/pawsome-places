import styled, { css } from "styled-components";
import backgroundURL from '../../assets/amscat.png'
import { theme } from "../../styles/theme";

const DivideHalfScreen = css`
  display: flex;
  flex: 0.5;
`;

const HomePageContainer = styled.div`
  display: flex;
  background-color: red;
  height: 100vh;
`;
const LeftContainer = styled.div`
  ${DivideHalfScreen};
  background-color: ${theme.navBackColor};
`;

const RightContainer = styled.div`
  ${DivideHalfScreen};
  background-image: url(${backgroundURL});

`;

export { HomePageContainer, LeftContainer, RightContainer };
