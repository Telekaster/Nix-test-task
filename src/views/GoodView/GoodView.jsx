import { useState } from "react";
import Header from "../../components/Header";
import Front from "../../components/Front/Front";
import Good from "../../components/Good";
import Footer from "../../components/Footer";

export default function GoodView() {
  const [menu, setMenu] = useState(false);
  const [changeId, setChangeId] = useState();

  const menuHandler = () => {
    setMenu((menu) => !menu);
  };

  return (
    <>
      <Header handler={menuHandler} open={menu} />
      <Front open={menu} />
      <Good />
      <Footer />
    </>
  );
}
