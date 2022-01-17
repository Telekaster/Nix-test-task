import styles from "./Shops.module.scss";
import uni from "./img/uni.png";
import marple from "./img/marple.png";
import tShirtOne from "./img/tShirtOne.png";
import tShirtTwo from "./img/tShirtTwo.png";
import tShirtThree from "./img/tShirtThree.png";
import huawei from "./img/huawei.png";
import iPhone from "./img/iPhone.png";
import phoneOne from "./img/phoneOne.png";
import phoneTwo from "./img/phoneTwo.png";
import phoneThree from "./img/phoneThree.png";
import dog from "./img/dog.png";
import { useSelector } from "react-redux";

export default function Shops() {
  const language = useSelector((store) => {
    return store.languageReducer;
  });
  return (
    <div className={styles.container}>
      {language === "rus" && <h2 className={styles.title}>Магазины для вас</h2>}
      {language === "ukr" && <h2 className={styles.title}>Магазини для вас</h2>}

      <div className={styles.shop_block}>
        <ul className={styles.list}>
          {/* --------------------------- */}
          <li>
            <div className={styles.shop}>
              <div className={styles.logo_block}>
                <img src={uni} alt="logo" className={styles.uni}></img>
                <img src={marple} alt="logo" className={styles.marple}></img>
              </div>
              <div className={styles.goods}>
                <img
                  src={tShirtOne}
                  alt="t-shirt"
                  className={styles.image}
                ></img>
                <img
                  src={tShirtTwo}
                  alt="t-shirt"
                  className={styles.image}
                ></img>
                <img
                  src={tShirtThree}
                  alt="t-shirt"
                  className={styles.image}
                ></img>
              </div>
            </div>
          </li>
          {/* --------------------------- */}
          <li>
            <div className={styles.shop}>
              <div className={styles.logo_block}>
                <img src={huawei} alt="logo" className={styles.huawei}></img>
                <img src={iPhone} alt="logo" className={styles.marple}></img>
              </div>
              <div className={styles.goods}>
                <img
                  src={phoneOne}
                  alt="t-shirt"
                  className={styles.image}
                ></img>
                <img
                  src={phoneTwo}
                  alt="t-shirt"
                  className={styles.image}
                ></img>
                <img
                  src={phoneThree}
                  alt="t-shirt"
                  className={styles.image}
                ></img>
              </div>
            </div>
          </li>
          {/* --------------------------- */}
          <li>
            <div className={styles.sales}>
              <img src={dog} alt="собака" c></img>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
