import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import styles from "./Admin.module.scss";
import AdminCategoryList from "./AdminCategoryList";
import Profile from "./Profile";
import AdminCategories from "./AdminCategories";
import AdminCategoriesOpen from "./AdminCategories/AdminCategoriesOpen";

export default function Admin({ modalOpen }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      console.log(true);
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.main_block}>
        <AdminCategoryList />
        <Routes>
          <Route
            path="/profile"
            exact
            element={<Profile modalOpen={modalOpen} />}
          />
          <Route path="/categories" exact element={<AdminCategories />} />
          <Route path="/categories/*" exact element={<AdminCategoriesOpen />} />
        </Routes>
      </div>
    </div>
  );
}
