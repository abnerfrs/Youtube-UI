import {
  ChannelImage,
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
} from "./style";
import GTA6 from "../../assets/gta-6-banner.webp";

interface IProps {
  menuState: boolean;
}

function VideoComponent({ menuState }: IProps) {
  return (
    <Container>
      <ImageBanner src={GTA6} menustate={menuState}></ImageBanner>
      <TitleContainer>
        <ChannelImage>RG</ChannelImage>
        <TextContainer>
          <Title>Grand Theft Auto VI - Official Trailer</Title>
          <TextCard>Rockstar Games</TextCard>
          <TextCard>1b de visualizações - há 10 dias</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default VideoComponent;
