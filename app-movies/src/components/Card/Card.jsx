import { Link } from "react-router-dom";
import { IoHeartSharp } from "react-icons/io5";
import styles from "./Card.module.css";

const Card = ({ id }) => {
  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
      </Link>
        <IoHeartSharp className={styles.icon} />
    </section>
  );
};

export default Card;
