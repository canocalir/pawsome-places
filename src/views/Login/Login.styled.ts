import styled from "styled-components";
import { MainHeading } from "../../styles/globalStyles";
import back from "../../assets/pattern.png";
import { theme } from "../../styles/theme";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${back});
  background-size: cover;
  height: 100vh;
  gap: 1rem;
  > h1 {
    ${MainHeading};
    font-size: 3rem;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > input {
    border: none;
    padding: 1rem;
    width: 20rem;
    border-radius: 0.5rem;
  }
  > input[type="submit"] {
    background-color: ${theme.mainButtonColor};
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    &:hover {
      background-color: ${theme.mainButtonHoverColor};
      cursor: pointer;
      transition: 300ms ease-in;
    }
  }
  > span {
    color: red;
  }
`;

const LoginButtonGoogle = styled.button`
  width: 20rem;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  &:hover{
    background-color: #dadada;
    transition: 300ms ease-in;
    cursor: pointer;
  }
`

export { LoginPageContainer, LoginForm, LoginButtonGoogle };
