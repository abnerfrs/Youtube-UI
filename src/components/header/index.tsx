import {
  ButtonContainer,
  ButtonIcon,
  LoginSession,
  SearchInputContainer,
  Container,
  SearchButton,
  SearchInput,
  LogoContainer,
  SearchContainer,
  HeaderButtons,
} from "./style";

import HamburgerIcon from "../../assets/hamburger.png";
import MenuLogin from "../../assets/menulogin.webp";
import Logo from "../../assets/youtube_logo.png";
import SearchIcon from "../../assets/search.png";
import Mic from "../../assets/mic.png";
import Video from "../../assets/video.png";
import Notification from "../../assets/sino.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface IProps {
  menuState: boolean;
  setMenuState: (menuState: boolean) => void;
}

function Header({ menuState, setMenuState }: IProps) {
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer
          onClick={() => setMenuState(!menuState)}
          margin="0 10px 0 0"
        >
          <ButtonIcon alt="" src={HamburgerIcon} />
        </ButtonContainer>
        <img
          alt=""
          onClick={() => navigate("/")}
          src={Logo}
          style={{ cursor: "pointer", width: "100px" }}
        />
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
        {login?
        <ButtonContainer margin="0 0 0 10px" onClick={() => navigate("/login")}>
          A
        </ButtonContainer>
        :
        <LoginSession menustate={menuState} onClick={() => navigate('/login')}>
          <img alt="" src={MenuLogin}></img>
          <span>Fazer login</span>
        </LoginSession>
    }
      </HeaderButtons>
    </Container>
  );
}

export default Header;
