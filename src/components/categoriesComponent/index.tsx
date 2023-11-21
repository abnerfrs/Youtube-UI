import { Container, CategoryBG } from "./style";

function CategoriesComponent() {
  interface IProps {
    name: string;
    link: string;
  }

  const categories: Array<IProps> = [
    { name: "Tudo", link: "/all" },
    { name: "Música", link: "/music" },
    { name: "Rap", link: "/rap" },
    { name: "Ao vivo", link: "/live" },
    { name: "Games", link: "/games" },
    { name: "Enviados recentemente", link: "/recent" },
    { name: "Podcast", link: "/podcast" }
  ];

  return (
    <Container>
      {categories.map((value,index:number) => (
        <CategoryBG key={index}>
          <span>{value.name}</span>
        </CategoryBG>
      ))}
    </Container>
  );
}

export default CategoriesComponent;
