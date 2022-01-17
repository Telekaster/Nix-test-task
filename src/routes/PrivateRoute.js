import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Notiflix from "notiflix";

export default function PrivateRoute({ children, redirectTo = "/" }) {
  const language = useSelector((store) => {
    return store.languageReducer;
  });
  const token = localStorage.getItem("auth");

  if (!token) {
    language === "rus" &&
      Notiflix.Notify.warning(`Сначала войдите в вашу учётную запись`);
    language === "ukr" &&
      Notiflix.Notify.warning(`Спочатку увійдіть до вашого облікового запису`);
  }
  return token ? children : <Navigate to={redirectTo} />;
}
