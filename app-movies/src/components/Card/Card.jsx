import styles from "./Card.module.css";

const Card = ({ id }) => {
    return (
        <section className={styles.card}>
            <a 
            href={`https://youtu.be/${id}?si=LUC2UjLslpbWKmwS`}
            rel="noreferrer noopener"  
            target="_blank">   
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="Capa"/>
            </a>
        </section>
    );
};

export default Card;



