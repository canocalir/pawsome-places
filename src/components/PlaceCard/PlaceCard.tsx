import { useState } from "react";
import {
  PlaceCardContainer,
  PlaceImage,
  PlaceInnerContainer,
  ReviewContainer,
  ReviewRating,
  ReviewsButton,
  SingleReviewList,
} from "./PlaceCard.styled.";

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
  const [data, setData] = useState<[]>();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };

  const fetchReviewsData = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_CORS_URL}${
        import.meta.env.VITE_BASE_URL
      }businesses/${placeId}/reviews`,
      options
    );

    const data = await res.json();
    setIsOpen(!isOpen);
    setData(data?.reviews);
  };
  console.log(placeId);
  console.log(data);

  return (
    <PlaceCardContainer>
      <PlaceInnerContainer>
        <PlaceImage src={placeImage} />
        <h1>{placeName}</h1>
        <h2>{placeRating}</h2>
        <p>{placePhone}</p>
        <ReviewsButton id={placeId} onClick={fetchReviewsData} />
      </PlaceInnerContainer>
      <ReviewContainer>
        {isOpen &&
          data?.map((review: any) => {
            return (
              <SingleReviewList id={review?.id} key={review?.id}>
                <ReviewRating>{review?.rating}</ReviewRating>
                {review?.id !== placeId && review?.text}
              </SingleReviewList>
            );
          })}
        {isOpen && data?.length === 0 && "No reviews"}
      </ReviewContainer>
    </PlaceCardContainer>
  );
};

export default PlaceCard;
