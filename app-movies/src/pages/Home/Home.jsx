import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Category, {
  categories,
  filterCategory,
} from "../../components/Category/Category";

function Home() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        {categories.map((category, index) => (
          <Category key={index} category={category}>
            {filterCategory(index).map((video) => (
              <Card id={video.id} key={video.id} />
            ))}
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
