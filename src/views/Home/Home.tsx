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
  const {locationString, price, coordinates} = useAppSelector((state) => state.places);

  const {lat, lon} = coordinates

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_API_KEY
    }
  };

  const conditionalURL =  !coordinates ? `https://api.yelp.com/v3/businesses/search?term=pet+friendly&location=${locationString}&price=${price}&sort_by=best_match&limit=20` : `https://api.yelp.com/v3/businesses/search?term=pet+friendly&latitude=${lat}&longitude=${lon}&price=${price}&sort_by=best_match&limit=20`

  const {data, error, isError, isLoading, refetch} = useQuery(['fetchPlaces'], () => fetch(`${import.meta.env.VITE_CORS_URL}${conditionalURL}`, options).then((res) => res.json()), {
    enabled: false
  })
  console.log(data)

  return (
    <HomePageContainer>
      <LeftContainer full={controlWidth}>
        <h3>Find Pet Friendly Places Around You</h3>
        <HomeForm refetch={refetch}/>
        <Filter />
        <PlaceCard />
      </LeftContainer>
      <RightContainer full={controlWidth}>
        <BackgroundImage src={backgroundURL} alt="" />
      </RightContainer>
    </HomePageContainer>
  );
};

export default Home;
