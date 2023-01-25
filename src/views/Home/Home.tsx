import {
    BackgroundImage,
  HomePageContainer,
  LeftContainer,
  RightContainer,
} from "./Home.styled";
import backgroundURL from '../../assets/amscat.png'
import HomeForm from "../../components/HomeForm/HomeForm";
import PlaceCard from "../../components/PlaceCard/PlaceCard";

const Home = () => {
  return (
    <HomePageContainer>
      <LeftContainer>
       <h1>Welcome to Pawsome Places</h1>
       <HomeForm/>
       {[1,2,3,4,5,6,7,8,9,10,11].map((num) => <PlaceCard/>)}
      </LeftContainer>
      <RightContainer>
        <BackgroundImage src={backgroundURL} alt="" />
      </RightContainer>
    </HomePageContainer>
  );
};

export default Home;
