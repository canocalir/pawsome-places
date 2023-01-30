import { FooterMainContainer } from "./Footer.styled"

const Footer = () => {
  return (
    <FooterMainContainer>
        All rights Reserved {new Date().getFullYear()}
    </FooterMainContainer>
  )
}

export default Footer