import styles from "./Information.module.scss";
export default function InformationRU() {
  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#" className={styles.text}>
            Покупцям
            {/* svg_desktop */}
            <svg
              className={styles.arrow_desktop}
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00042 4.9007L0.714411 0.208283C0.55102 0.0444756 0.285934 0.0444756 0.122543 0.208283C-0.0408477 0.372091 -0.0408477 0.638012 0.122543 0.801819L4.68323 5.79517C4.77034 5.88269 4.88621 5.91979 4.99999 5.91396C5.1142 5.91979 5.22965 5.88269 5.31677 5.79517L9.87744 0.801819C10.0408 0.638012 10.0408 0.372091 9.87744 0.208283C9.71407 0.0444756 9.44897 0.0444756 9.28559 0.208283L5.00042 4.9007Z"
                fill="black"
              />
            </svg>
            {/* svg_tablet */}
            <svg
              className={styles.arrow_tablet}
              width="4.5"
              height="8"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00042 4.9007L0.714411 0.208283C0.55102 0.0444756 0.285934 0.0444756 0.122543 0.208283C-0.0408477 0.372091 -0.0408477 0.638012 0.122543 0.801819L4.68323 5.79517C4.77034 5.88269 4.88621 5.91979 4.99999 5.91396C5.1142 5.91979 5.22965 5.88269 5.31677 5.79517L9.87744 0.801819C10.0408 0.638012 10.0408 0.372091 9.87744 0.208283C9.71407 0.0444756 9.44897 0.0444756 9.28559 0.208283L5.00042 4.9007Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.text}>
            Постачальникам
            {/* svg_desktop */}
            <svg
              className={styles.arrow_desktop}
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00042 4.9007L0.714411 0.208283C0.55102 0.0444756 0.285934 0.0444756 0.122543 0.208283C-0.0408477 0.372091 -0.0408477 0.638012 0.122543 0.801819L4.68323 5.79517C4.77034 5.88269 4.88621 5.91979 4.99999 5.91396C5.1142 5.91979 5.22965 5.88269 5.31677 5.79517L9.87744 0.801819C10.0408 0.638012 10.0408 0.372091 9.87744 0.208283C9.71407 0.0444756 9.44897 0.0444756 9.28559 0.208283L5.00042 4.9007Z"
                fill="black"
              />
            </svg>
            {/* svg_tablet */}
            <svg
              className={styles.arrow_tablet}
              width="4.5"
              height="8"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00042 4.9007L0.714411 0.208283C0.55102 0.0444756 0.285934 0.0444756 0.122543 0.208283C-0.0408477 0.372091 -0.0408477 0.638012 0.122543 0.801819L4.68323 5.79517C4.77034 5.88269 4.88621 5.91979 4.99999 5.91396C5.1142 5.91979 5.22965 5.88269 5.31677 5.79517L9.87744 0.801819C10.0408 0.638012 10.0408 0.372091 9.87744 0.208283C9.71407 0.0444756 9.44897 0.0444756 9.28559 0.208283L5.00042 4.9007Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" className={styles.text}>
            Часті питання
          </a>
        </li>
      </ul>
    </div>
  );
}
