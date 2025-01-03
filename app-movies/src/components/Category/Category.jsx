import styles from "./Category.module.css";

import videos from "../../json/videos.json";

export const categories = [
  "Anime",
  "Lo mejor de Hollywood",
  "Para toda la familia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
];

export const filterCategory = (id) => {
  return videos.filter((video) => video.category === categories[id]);
};

const Category = ({ category, children }) => {
  return (
    <section className={styles.category}>
      <h2>{category}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Category;
