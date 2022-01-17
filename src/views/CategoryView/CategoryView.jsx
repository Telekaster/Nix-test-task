import { useState } from "react";
import Header from "../../components/Header";
import Front from "../../components/Front/Front";
import Category from "../../components/Category";
import Footer from "../../components/Footer";

export default function CategoryView() {
  const [menu, setMenu] = useState(false);
  const [changeId, setChangeId] = useState();

  const menuHandler = () => {
    setMenu((menu) => !menu);
  };

  const categoryHandler = (e) => {
    setChangeId(e.target.id);
    setMenu(false);
  };

  return (
    <>
      <Header handler={menuHandler} open={menu} />
      <Front open={menu} categoryHandler={categoryHandler} />
      <Category changeId={changeId} categoryHandler={categoryHandler} />
      <Footer />
    </>
  );
}
