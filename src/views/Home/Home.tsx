import {
  BackgroundImage,
  HomePageContainer,
  LeftContainer,
  RightContainer,
} from "./Home.styled";
import backgroundURL from "../../assets/amscat.png";
import HomeForm from "../../components/HomeForm/HomeForm";
import PlaceCard from "../../components/PlaceCard/PlaceCard";
import Filter from "../../components/Filter/Filter";
import { useAppSelector } from "../../app/hooks";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const controlWidth = false;
  const { locationString, price, coordinates } = useAppSelector(
    (state) => state.places
  );

  const { lat, lon } = coordinates;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };

  const conditionalURL =
    !coordinates.lat && !coordinates.lon
      ? `${
          import.meta.env.VITE_BASE_URL
        }businesses/search?location=${locationString}&term=pet%20friendly&price=${price}&sort_by=best_match&limit=20`
      : `${
          import.meta.env.VITE_BASE_URL
        }businesses/search?term=pet%20friendly&latitude=${lat}&longitude=${lon}&price=${price}&sort_by=best_match&limit=20`;

  //FetchData with React Query
  const { data, error, isError, refetch } = useQuery(
    ["fetchPlaces"],
    () =>
      fetch(`${import.meta.env.VITE_CORS_URL}${conditionalURL}`, options).then(
        (res) => res.json()
      ),
    {
      enabled: false,
    }
  );

  console.log(data);
  return (
    <HomePageContainer>
      <LeftContainer full={controlWidth}>
        {data && (
          <h3>
            Pet Friendly Places Around{" "}
            {locationString.toUpperCase() || "Your Current Location"}
          </h3>
        )}
        <HomeForm refetch={refetch} />
        {data && <Filter />}
        {data?.businesses?.map((place: any) => {
          const { id, image_url, name, rating, phone } = place;
          return (
            <PlaceCard
              placeId={id}
              placePhone={phone}
              placeRating={rating}
              placeName={name}
              placeImage={image_url}
              key={id}
            />
          );
        })}
      </LeftContainer>
      <RightContainer full={controlWidth}>
        <BackgroundImage src={backgroundURL} alt="" />
      </RightContainer>
    </HomePageContainer>
  );
};

export default Home;
