import erro404 from "./page-404-error.png";

import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";

import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <h2>¡Ups, página no encontrada!</h2>
        <img className={styles.error} src={erro404} alt="¡Ups, página no encontrada!" />
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
