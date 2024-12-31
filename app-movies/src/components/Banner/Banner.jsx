import styles from "./Banner.module.css";

const images = import.meta.glob("../../images/banner-*.png", { eager: true });

const Banner = ({ image }) => {
  const bannerImage = images[`../../images/banner-${image}.png`];

  if (!bannerImage) {
    console.error(`Image for ${image} not found.`);
    return null;
  }

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${bannerImage.default})` }}
    ></div>
  );
};

export default Banner;
