import { useEffect, useState } from "react";
import {
  PlaceCardContainer,
  PlaceImage,
  PlaceInnerContainer,
  ReviewContainer,
  ReviewRating,
  SingleReviewList,
} from "./PlaceCard.styled.";
import { useQuery } from "@tanstack/react-query";

type PlaceCardProps = {
  placeImage: string;
  placeName: string;
  placeRating: number;
  placePhone: string;
  placeId: string;
};

const PlaceCard = ({
  placeImage,
  placeName,
  placeRating,
  placePhone,
  placeId,
}: PlaceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };

  const { data, error, isError, isLoading, refetch } = useQuery(
    ["fetchReview"],
    () =>
      fetch(
        `${import.meta.env.VITE_CORS_URL}${
          import.meta.env.VITE_BASE_URL
        }businesses/${placeId}/reviews`,
        options
      ).then((res) => res.json()),
    {
      enabled: false,
    }
  );
  
  console.log(data)

  const fetchReviewsData = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    refetch()
  },[isOpen, refetch])

  return (
    <PlaceCardContainer>
      <PlaceInnerContainer>
      <PlaceImage src={placeImage} />
        <h1>{placeName}</h1>
        <h2>{placeRating}</h2>
        <p>{placePhone}</p>
        <button id={placeId} onClick={fetchReviewsData}>Reviews</button>
      </PlaceInnerContainer>
      <ReviewContainer>
        {isOpen &&
          data?.reviews?.map((review: any) => {
            return (
              <SingleReviewList id={review?.id} key={review?.id}>
                <ReviewRating>{review?.rating}</ReviewRating>
                {review?.id !== placeId && review?.text}
              </SingleReviewList>
            );
          })}
      </ReviewContainer>
    </PlaceCardContainer>
  );
};

export default PlaceCard;
