import { categories } from "../Category/Category";

import styles from "./Form.module.css";

function Form() {
  return (
    <section className={styles.container}>
      <h2>Registro de vídeo</h2>
      <form>
        <div>
          <label>URL del vídeo</label>
          <input
            type="text"
            placeholder="Introduce la URL del vídeo"
            required="required"
          />
        </div>
        <div>
          <label>Categoría</label>
          <select>
            <option value="-">Selecciona una categoría</option>
            { categories.map((item) => {
                return <option value={item} >{item}</option>
            }) }
          </select>
        </div>
        <div>
          <button>Registro</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
