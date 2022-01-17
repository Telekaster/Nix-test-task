import styles from "./Popup.module.scss";
import { useSelector } from "react-redux";
import Dropzone from "./DropZone";
import { useDispatch } from "react-redux";
import { modalControl } from "../../../../redux/actions/uploadAction";

export default function Popup() {
  const dispatch = useDispatch();
  const language = useSelector((store) => {
    return store.languageReducer;
  });

  function closeModal() {
    console.log("click");
    dispatch(modalControl(false));
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popup__body}>
        <div className={styles.popup__content}>
          <button className={styles.popup__close} onClick={closeModal}>
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z"
                fill="#000"
              />
            </svg>
          </button>
          <h2 className={styles.popup__title}>
            {language === "rus" && "Загрузка нового изображения"}
            {language === "ukr" && "Завантаження нового зображення"}
          </h2>
          <div className={styles.popup__text}>
            <Dropzone />
          </div>
        </div>
      </div>
    </div>
  );
}
