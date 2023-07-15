import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userAction } from "../../store/slice/user";
import Background_blue from "../../UI/Background_blue";
import Card from "../../UI/Cart";
import NavbarItem from "./NavbarItem";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isEmail, setIsEmail] = useState();
  const userLocalStorage = localStorage.getItem("user") ? true : false;
  useEffect(() => {
    if (userLocalStorage) {
      const [user] = JSON.parse(localStorage.getItem("user")).user;
      setIsEmail(user.email);
    }
  }, [userLocalStorage]);

  const logoutHandler = (e) => {
    if (!window.confirm("Are you sure")) {
      e.preventDefault();
    } else {
      localStorage.removeItem("user");
      dispatch(userAction.on_logout());
    }
  };
  return (
    <Background_blue>
      <Card>
        <div className={styles.nav}>
          <Link to="/" className={styles.link}>
            Booking Website
          </Link>
          <div className={styles.btn}>
            {isEmail && <p>{isEmail}</p>}
            <Link to="/transactions">Transactions</Link>
            <Link to="/login" onClick={logoutHandler}>
              Logout
            </Link>
          </div>
        </div>
        <NavbarItem />
      </Card>
    </Background_blue>
  );
};
export default Navbar;
