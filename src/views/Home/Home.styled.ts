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
  height: 100vh;
  padding-top: 4.5rem;
`;

interface LeftProps {
  full: boolean;
}

const LeftContainer = styled.div<LeftProps>`
  ${props => !props.full && DivideHalfScreen};
  width: ${(props) => (props.full && "100%")};
  background-color: #3f4e31;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 2rem 2rem 4rem 0rem;
  overflow: auto;
  flex-wrap: wrap;
  gap: 1.5rem;
  > h3 {
    color: ${theme.mainButtonHoverColor};
    padding: 1rem 1rem 0 1rem;
    text-align: center;
  }
  @media(max-width: 864px){
    width: 100%;
    padding:0;
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
  position: fixed;
  right: 0;
  @media (max-width: 1600px) {
    display: none;
  }
`;

const BackgroundImage = styled.img`
  height: 100vh;
  width: 50vw;
`;

export { HomePageContainer, LeftContainer, RightContainer, BackgroundImage };
