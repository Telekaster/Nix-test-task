import { useState } from "react";
import Header from "../../components/Header";
import Front from "../../components/Front";
import CartMenu from "../../components/Cart/CartMenu";
import Orders from "../../components/Orders/Orders";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

export default function OrdersView() {
  const [menu, setMenu] = useState(false);
  const language = useSelector((store) => {
    return store.languageReducer;
  });

  const menuHandler = () => {
    setMenu((menu) => !menu);
  };

  return (
    <>
      <Header handler={menuHandler} open={menu} />
      <Front open={menu} />

      <Orders />
      <Footer />
    </>
  );
}
