import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

const DivideHalfScreen = css`
  flex: 0.5;
  @media (max-width: 1600px) {
    flex: 1;
  }
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface LeftProps {
  full: boolean;
}

const LeftContainer = styled.div<LeftProps>`
  ${props => !props.full && DivideHalfScreen};
  width: ${(props) => (props.full && "100%")};
  background-color: #3f4e31;
  padding-top: 10rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 100vh;
  > h3 {
    color: ${theme.mainButtonHoverColor};
    padding: 0 1rem 0 1rem;
    text-align: center;
  }
`;

interface RightProps extends LeftProps{
  full: boolean
}

const RightContainer = styled.div<RightProps>`
  ${DivideHalfScreen};
  display: ${(props) => props.full ? "none" : "flex"};
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

export { HomePageContainer, LeftContainer, RightContainer, BackgroundImage };
