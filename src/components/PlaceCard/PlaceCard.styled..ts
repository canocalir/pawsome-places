import styled from "styled-components";
import { theme } from "../../styles/theme";

const PlaceCardContainer = styled.div`
    display: flex;
    background-color: #ffffff;
    width: 80%;
    height: 7rem;
    border-radius: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 3px solid ${theme.mainButtonHoverColor};
`

export {PlaceCardContainer}