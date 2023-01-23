import {
    BackgroundImage,
  HomePageContainer,
  LeftContainer,
  RightContainer,
} from "./Home.styled";
import backgroundURL from '../../assets/amscat.png'

const Home = () => {
  return (
    <HomePageContainer>
      <LeftContainer>
       <h1>Welcome to Pawsome</h1>
       <form>
        <input type="text" name="" id="" />
       </form>
      </LeftContainer>
      <RightContainer>
        <BackgroundImage src={backgroundURL} alt="" />
      </RightContainer>
    </HomePageContainer>
  );
};

export default Home;
