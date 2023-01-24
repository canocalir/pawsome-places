import {
    BackgroundImage,
  HomePageContainer,
  LeftContainer,
  RightContainer,
} from "./Home.styled";
import backgroundURL from '../../assets/amscat.png'
import HomeForm from "../../components/HomeForm/HomeForm";

const Home = () => {
  return (
    <HomePageContainer>
      <LeftContainer>
       <h1>Welcome to Pawsome</h1>
       <HomeForm/>
      </LeftContainer>
      <RightContainer>
        <BackgroundImage src={backgroundURL} alt="" />
      </RightContainer>
    </HomePageContainer>
  );
};

export default Home;
