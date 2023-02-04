import styled from "styled-components";
import {MdReviews} from "react-icons/md"

const PlaceCardContainer = styled.div`
  display: flex;
  background-color: #dbecdf;
  width: 80%;
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  @media (max-width: 864px) {
    flex-wrap: wrap;
  }
`;

const PlaceImage = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover;
  border-radius: 1rem;
`;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PlaceInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 864px) {
    flex-wrap: wrap;
  }
  >h1{
    font-size: 1.2rem;
    width: 5rem;
  }
  >h2{
    width: 2rem;
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
`

export {
  PlaceCardContainer,
  PlaceImage,
  ReviewContainer,
  PlaceInnerContainer,
  ReviewRating,
  SingleReviewList,
  ReviewsButton
};
