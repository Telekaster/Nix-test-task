import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Login from "../../components/Login";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export default function LoginView() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const menuHandler = () => {
    setMenu((menu) => !menu);
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Header handler={menuHandler} open={menu} />
      <Login />
      <Footer />
    </>
  );
}
