import { ButtonIcon, Container, MenuItem } from "./style";
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

const sources: Array<sourcesNames> = [
  { name: "Início", url: HomeIcon, link: "/" },
  { name: "Shorts", url: ShortsIcon, link: "/shorts" },
  { name: "Inscrições", url: SubscribeIcon, link: "/subscribe" },
  { name: "Biblioteca", url: Me, link: "/library" },
  { name: "Histórico", url: Historic, link: "/historic" },
];

interface IProps {
  menuState: boolean;
}

function Menu({ menuState }: IProps) {
  const navigate = useNavigate();

  return (
    <Container menuState={menuState}>
      {sources.map((value) => (
        <MenuItem menuState={menuState} onClick={() => navigate(value.link)}>
          <ButtonIcon alt="" src={value.url} />
          <span>{value.name}</span>
        </MenuItem>
      ))}
    </Container>
  );
}

export default Menu;
