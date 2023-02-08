import styled from "styled-components";
import {MdReviews} from "react-icons/md"
import { theme } from "../../styles/theme";

const PlaceCardContainer = styled.div`
  display: flex;
  background-color: #dbecdf;
  width: 80%;
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  border: 4px solid ${theme.mainButtonHoverColor};
  @media (max-width: 864px) {
    flex-wrap: wrap;
  }
`;

const PlaceDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  >h1{
  }
  
`

const PlaceDetailsInnerContainer = styled.div`
  display: flex;
  >h2{
    position:absolute;
    top:0.5rem;
    right: 0.5rem;
  }
`

const PlaceImage = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover;
  border-radius: 1rem;
`;

type ReviewContainerProps = {
  isOpen: boolean
}

const ReviewContainer = styled.div<ReviewContainerProps>`
  display: ${props => !props.isOpen ? "none" : "flex"};
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem;
`;

const PlaceInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 864px) {
    flex-wrap: wrap;
  }
`;

const ReviewRating = styled.div`
  background-color: green;
  color: #ffffff;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.4rem;
  text-align: center;
`;

const SingleReviewList = styled.li`
  list-style: none;
  display: flex;
`;

const ReviewsButton = styled(MdReviews)`
  font-size: 1.5rem;
  color: green;
  cursor: pointer;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`

export {
  PlaceCardContainer,
  PlaceImage,
  ReviewContainer,
  PlaceInnerContainer,
  ReviewRating,
  SingleReviewList,
  ReviewsButton,
  PlaceDetailsContainer,
  PlaceDetailsInnerContainer
};
