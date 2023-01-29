import styled from "styled-components";

const PlaceCardContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 80%;
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  padding: 1rem;
`;

const PlaceImage = styled.img`
  width: 200px;
  height: 100px;
  object-fit: contain;
`;

const ReviewContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const PlaceInnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`

const ReviewRating = styled.div`
    background-color: green;
    color: #ffffff;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.4rem;
    text-align: center;    
`

const SingleReviewList = styled.li`
    list-style: none;
    display: flex;
`

export { PlaceCardContainer, PlaceImage, ReviewContainer, PlaceInnerContainer, ReviewRating, SingleReviewList };
