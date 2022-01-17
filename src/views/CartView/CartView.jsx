import { useState } from "react";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import Front from "../../components/Front";
import CartMenu from "../../components/Cart/CartMenu/CartMenu";
import Footer from "../../components/Footer";

export default function CartView() {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu((menu) => !menu);
  };
  return (
    <>
      <Header handler={menuHandler} open={menu} />
      <Front open={menu} />
      <CartMenu />
      <Cart />
      <Footer />
    </>
  );
}
