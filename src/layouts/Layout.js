import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, redirect } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Form from "./Form/Form";
import Footers from "./Footer/Footers";
const Layout = () => {
  const user = useSelector((state) => state.user);

  const userLocalStorage = localStorage.getItem("user") ? true : false;
  const navigate = useNavigate();

  //---nếu chưa đăng nhập và trong localstorage không có user thì quay lại trang login---
  useEffect(() => {
    if (!userLocalStorage) {
      if (!user.isLogin) {
        return navigate("/login");
      }
    }
  }, [user, userLocalStorage]);

  return (
    <>
      <Navbar />

      <Outlet />

      <Form />
      <Footers />
    </>
  );
};
export default Layout;
