import { Link } from "react-router-dom";
import { IoHeartSharp } from "react-icons/io5";
import styles from "./Card.module.css";
import { useFavoriteContext } from "../../contexts/Favorites";

const Card = ({ id }) => {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);

 
  const icone = (
    <IoHeartSharp
      className={styles.icon}
      color={!isFavorite ? "white" : "red"} 
      onClick={() => addFavorite({ id })}
    />
  );

  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
      </Link>
      {icone}
    </section>
  );
};

export default Card;
