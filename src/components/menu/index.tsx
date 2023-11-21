import { ButtonIcon, Container, MenuItem } from "./style";
import HomeIcon from "../../assets/botao-de-inicio.png";
import ShortsIcon from "../../assets/shorts.png";
import SubscribeIcon from "../../assets/subscribe.png";
import Me from "../../assets/me.png";
import Historic from "../../assets/historic.png";

interface sourcesNames {
  name: string;
  url: string;
}

const sources: Array<sourcesNames> = [
  { name: "Início", url: HomeIcon },
  { name: "Shorts", url: ShortsIcon },
  { name: "Inscrições", url: SubscribeIcon },
  { name: "Biblioteca", url: Me },
  { name: "Histórico", url: Historic },
];

interface IProps {
  menuState: boolean;
}

function Menu({ menuState }: IProps) {
  return (
    <Container menuState={menuState}>
      {sources.map((value) => (
        <MenuItem menuState={menuState}>
          <ButtonIcon alt="" src={value.url} />
          <span>{value.name}</span>
        </MenuItem>
      ))}
    </Container>
  );
}

export default Menu;
