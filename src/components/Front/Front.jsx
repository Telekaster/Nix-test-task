import Categories from "./Categories";
import styles from "./Front.module.scss";
import baner from "./baner1.jpg";

export default function Front({ open, categoryHandler }) {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Categories open={open} categoryHandler={categoryHandler} />
        <img src={baner} alt="баннер" className={styles.baner} />
      </div>
    </div>
  );
}
