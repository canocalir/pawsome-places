import { BiCurrentLocation } from "react-icons/bi";
import styled from "styled-components";

const FormElement = styled.form`
    display: flex;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 1rem;
    width: fit-content;
    max-width: 90%;
    justify-content: space-between;
    gap:1rem;
    flex-wrap:wrap;
    >input{
        width: 19rem;
    }
`
const LocationButton = styled(BiCurrentLocation)`
    font-size: 1.5rem;
    color: green;
    cursor: pointer;
`

export {FormElement, LocationButton}