import {
  ButtonContainer,
  ButtonIcon,
  SearchInputContainer,
  Container,
  SearchButton,
  SearchInput,
  LogoContainer,
  SearchContainer,
  HeaderButtons,
} from "./style";

import HamburgerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/youtube_logo.png";
import SearchIcon from "../../assets/search.png";
import Mic from "../../assets/mic.png";
import Video from "../../assets/video.png";
import Notification from "../../assets/sino.png";

interface IProps {
  menuState: boolean;
  setMenuState: (menuState: boolean) => void;
}

function Header({ menuState, setMenuState }: IProps) {
  return (
    <Container>
      <LogoContainer>
        <ButtonContainer onClick={()=> setMenuState(!menuState)} margin="0 10px 0 0">
          <ButtonIcon alt="" src={HamburgerIcon} />
        </ButtonContainer>
        <img alt="" src={Logo} style={{ cursor: "pointer", width: "100px" }} />
      </LogoContainer>

      <SearchContainer>
        <SearchInputContainer>
          <SearchInput placeholder="Pesquisar..."></SearchInput>
        </SearchInputContainer>
        <SearchButton>
          <ButtonIcon alt="" src={SearchIcon} />
        </SearchButton>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={Mic}></ButtonIcon>
        </ButtonContainer>
      </SearchContainer>

      <HeaderButtons>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={Video}></ButtonIcon>
        </ButtonContainer>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={Notification}></ButtonIcon>
        </ButtonContainer>
        <ButtonContainer margin="0 0 0 10px">A</ButtonContainer>
      </HeaderButtons>
    </Container>
  );
}

export default Header;
