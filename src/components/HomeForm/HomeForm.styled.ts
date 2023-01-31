import { BiCurrentLocation } from "react-icons/bi";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";


const FormElementBorderRadius = css`
    border-radius: 1rem;
`

const FormElement = styled.form`
    display: flex;
    background-color: #ffffff;
    padding: 1rem;
    ${FormElementBorderRadius};
    width: fit-content;
    max-width: 95%;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    gap:1rem;
    flex-wrap:wrap;
    margin: auto;
    border: none;
`

const InputElementContainer = styled.div`
    display: flex;
    justify-content:center;
    width: 15rem;
    flex-direction: column;
    position: relative;
    height: fit-content;
    >input{
        height: 3rem;
        ${FormElementBorderRadius};
        border: 1px solid lightgrey;
        padding-left: 1rem;
    }
`

const LocationButton = styled(BiCurrentLocation)`
    font-size: 1.8rem;
    color: ${theme.navBackColor};
    cursor: pointer;
    position: absolute;
    right: 0.5rem;
`

const ErrorMessageContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 2rem;
    font-size: 0.8rem;
    color: red;
`

const PriceSelect = styled.select`
    border: none;
    background-color: ${theme.mainButtonHoverColor};
    padding: 0.5rem;
    width: 5rem;
    color: ${theme.navBackColor};
    font-weight: 600;
    ${FormElementBorderRadius};
`

const FindPlacesButton = styled.input`
    border: none;
    color: #ffffff;
    ${FormElementBorderRadius};
    font-size: 0.9rem;
    background-color: ${theme.navBackColor};
    cursor: pointer;
    padding: 0.5rem;
    &:hover{
        background-color: #3c7735;
        transition: 300ms ease-in-out;
    }
    @media(max-width: 864px){
        width: 100%;
    }
`

export {FormElement, LocationButton, FindPlacesButton, InputElementContainer, PriceSelect, ErrorMessageContainer}