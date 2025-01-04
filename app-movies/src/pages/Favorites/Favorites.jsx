import styles from "./Favorites.module.css";

import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";

function Favorites() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2>Mis favoritos</h2>
          Lista de Favoritos
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
