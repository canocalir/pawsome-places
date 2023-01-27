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

const Home = () => {
  const controlWidth = false;
  const {locationString, price, coordinates} = useAppSelector((state) => state.places);
  console.log(locationString);
  console.log(price);
  !locationString && console.log(coordinates)
  return (
    <HomePageContainer>
      <LeftContainer full={controlWidth}>
        <h3>Find Pet Friendly Places Around You</h3>
        <HomeForm />
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
