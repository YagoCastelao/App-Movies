import styles from "./Favorites.module.css";

import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import VideoList from "../../components/VideoList/VideoList";

import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {

    const { favorite } = useFavoriteContext()
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2>Mis favoritos</h2>
          {
            <VideoList
              videos={favorite}
              emptyHeading="Aún no tienes ningún vídeo favorito"
            />
          }
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
