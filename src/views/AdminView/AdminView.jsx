import { useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Front from "../../components/Front/Front";
import Admin from "../../components/Admin";

export default function AdminView({ modalOpen }) {
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
      <Admin modalOpen={modalOpen} />
      <Footer />
    </>
  );
}
