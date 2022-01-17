import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { languageAction } from "./redux/actions/goodsActions";
import { localStorageAvatarAction } from "./redux/actions/uploadAction";
import { addToCartAction } from "./redux/actions/cartActions";
import { loginFromLocalStorageAction } from "./redux/actions/loginActions";
import MainView from "./views/MainView";
import CategoryView from "./views/CategoryView";
import GoodView from "./views/GoodView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import PrivateRoute from "./routes/PrivateRoute";
import CartView from "./views/CartView";
import OrdersView from "./views/OrdersView";
import AdminView from "./views/AdminView";
import Popup from "./components/Admin/Profile/Popup";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  const modal = useSelector((store) => {
    return store.modalReducer;
  });

  if (localStorage.getItem("lang")) {
    dispatch(languageAction(localStorage.getItem("lang")));
  }

  if (localStorage.getItem("cart")) {
    dispatch(addToCartAction(JSON.parse(localStorage.getItem("cart"))));
  }

  useEffect(() => {
    if (localStorage.getItem("avatar")) {
      const avatar = JSON.parse(localStorage.getItem("avatar"));
      dispatch(localStorageAvatarAction(avatar));
    }
    if (localStorage.getItem("auth")) {
      console.log("есть");
      console.log(localStorage.getItem("auth"));
      dispatch(loginFromLocalStorageAction());
    }
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<MainView />} />
        <Route path="/category/:id" exact element={<CategoryView />} />
        <Route path="/good/:id" exact element={<GoodView />} />
        <Route path="/login" exact element={<LoginView />} />
        <Route path="/register" exact element={<RegisterView />} />

        <Route
          path="/cart"
          exact
          element={
            <PrivateRoute>
              <CartView />
            </PrivateRoute>
          }
        />

        <Route
          path="/orders"
          exact
          element={
            <PrivateRoute>
              <OrdersView />
            </PrivateRoute>
          }
        />
        <Route path="/management/*" exact element={<AdminView />} />
      </Routes>

      {modal && <Popup />}
    </div>
  );
}
