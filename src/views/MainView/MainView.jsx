import { useState } from "react";
import Header from "../../components/Header";
import Front from "../../components/Front";
import Shops from "../../components/Shops";
import Legend from "../../components/Legend";
import Footer from "../../components/Footer";

export default function MainView() {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu((menu) => !menu);
  };

  // if (localStorage.getItem("auth")) {
  //   dis;
  // }

  return (
    <div>
      <Header handler={menuHandler} open={menu} />
      <Front open={menu} />
      <Shops />
      <Legend />
      <Footer />
    </div>
  );
}
