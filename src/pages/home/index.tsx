import CategoriesComponent from "../../components/categoriesComponent";
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

interface IProps{
    menuState: boolean;
}

function Home({menuState}:IProps) {
  return (
    <div>
      <CategoriesComponent/>  
      <Container menustate={menuState}>
        <VideoComponent menuState={menuState} />
        <VideoComponent menuState={menuState} />
        <VideoComponent menuState={menuState} />
        <VideoComponent menuState={menuState} />
        <VideoComponent menuState={menuState} />
        <VideoComponent menuState={menuState} />
        <VideoComponent menuState={menuState} />
        <VideoComponent menuState={menuState} />
        <VideoComponent menuState={menuState} />
        <VideoComponent menuState={menuState} />
      </Container>
    </div>
  );
}

export default Home;
