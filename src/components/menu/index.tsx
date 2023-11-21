import { ButtonIcon, Container, LoginSession, MenuItem } from "./style";
import MenuLogin from "../../assets/menulogin.webp";
import HomeIcon from "../../assets/botao-de-inicio.png";
import ShortsIcon from "../../assets/shorts.png";
import SubscribeIcon from "../../assets/subscribe.png";
import Me from "../../assets/me.png";
import Historic from "../../assets/historic.png";
import { useNavigate } from "react-router-dom";

interface sourcesNames {
  name: string;
  url: string;
  link: string;
}

interface sourcesNames2 {
  name: string;
  url: string;
  link: string;
}

const sources: Array<sourcesNames> = [
  { name: "Início", url: HomeIcon, link: "/" },
  { name: "Shorts", url: ShortsIcon, link: "/shorts" },
  { name: "Inscrições", url: SubscribeIcon, link: "/subscribe" },
];

const sources2: Array<sourcesNames2> = [
  { name: "Biblioteca", url: Me, link: "/library" },
  { name: "Histórico", url: Historic, link: "/historic" },
];

interface IProps {
  menuState: boolean;
}

function Menu({ menuState }: IProps) {
  const navigate = useNavigate();

  return (
    <Container menustate={menuState}>
      {sources.map((value, index: number) => (
        <MenuItem
          key={index}
          menustate={menuState}
          onClick={() => navigate(value.link)}
        >
          <ButtonIcon alt="" src={value.url} />
          <span>{value.name}</span>
        </MenuItem>
      ))}
      {menuState ? <hr></hr> : ""}
      {sources2.map((value, index: number) => (
        <MenuItem
          key={index}
          menustate={menuState}
          onClick={() => navigate(value.link)}
        >
          <ButtonIcon alt="" src={value.url} />
          <span>{value.name}</span>
        </MenuItem>
      ))}

      { menuState ? (
        <p>
          Inicie sessão para gostar de vídeos, fazer comentários e subscrever.
        </p>
      ) : (
        ""
      )}

      <LoginSession menustate={menuState}>
        <img alt="" src={MenuLogin}></img>
        <span>Iniciar sessão</span>
      </LoginSession>
    </Container>
  );
}

export default Menu;
