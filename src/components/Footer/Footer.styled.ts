import styled from "styled-components";
import { theme } from "../../styles/theme";

const FooterMainContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: ${theme.navBackColor};
  width: 51%;
  height: 3rem;
  justify-content: center;
  align-items: center;
  color: ${theme.mainButtonHoverColor};
  font-weight: 600;
  @media(max-width: 864px){
    width: 100%;
  }
`;

export { FooterMainContainer };
