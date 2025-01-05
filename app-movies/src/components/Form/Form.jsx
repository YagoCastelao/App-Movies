import { useState } from "react";
import { categories } from "../Category/Category";

import styles from "./Form.module.css";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  function valideUrl(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.length < 43) {
      setErrors("ERROR: ¡URL no válida!");
      return false;
    } else {
      return url.substring(32, 43);
    }
  }

  const onSave = (e) => {
    e.preventDefault();
    console.log(url, category);

    if (!category || category === "-") {
      setErrors("ERROR: ¡Elige una categoría!");
      return;
    } else {
      setErrors("");
    }
    // Guardar URL y Category
    const urlVideo = valideUrl(url);
    if (urlVideo && category) {
      const newVideo = { url, category };
      setVideos([...videos, newVideo]);
      //localStorage creado para armazenar los videos cadastrados
      localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));
      setCategory("");
      setUrl("");
    } else {
      setErrors("ERROR: ¡URL no válida!");
    }
  };

  return (
    <section className={styles.container}>
      <h2>Registro de vídeo</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL del vídeo</label>
          <input
            type="text"
            placeholder="Introduce la URL del vídeo"
            required="required"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            minLength="43"
          />
        </div>
        <div>
          <label>Categoría</label>
          <select
            required="required"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="-">Selecciona una categoría</option>
            {categories.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
        <div>
          <button>Registro</button>
          <div className={styles.error}>{errors}</div>
        </div>
      </form>
    </section>
  );
}

export default Form;
