import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/slice/user";
import { Form, Link } from "react-router-dom";
import Background_blue from "../../UI/Background_blue";
import styles from "./Form.module.css";

const RegisterForm = () => {
  const [isEmail, setIsEmail] = useState();
  const dispatch = useDispatch();
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
    <>
      <Background_blue>
        <nav className={styles.nav}>
          <Link to="/">Booking</Link>
          <div className={styles.nav_content}>
            {isEmail && (
              <>
                <p className={styles.nav_email}>{isEmail}</p>
                <Link to="/transactions" className={styles.nav_link}>
                  Transactions
                </Link>
                <Link
                  to="/login"
                  onClick={logoutHandler}
                  className={styles.nav_link}
                >
                  Logout
                </Link>
              </>
            )}
            {!isEmail && (
              <Link to="/login" className={styles.nav_link}>
                Login
              </Link>
            )}
          </div>
        </nav>
      </Background_blue>

      <div className={styles.container}>
        <h1 className="lg">Sign Up</h1>
        <Form
          method="POST"
          action="/register"
          className={styles.form}
          id="register_form"
        >
          <input type="text" name="username" required placeholder="Username" />

          <input type="text" name="fullName" required placeholder="Full name" />

          <input type="email" name="email" required placeholder="Email" />

          <input
            type="number"
            name="phoneNumber"
            pattern=".{10}"
            title="Ten number"
            required
            placeholder="Phone number"
            className={styles.phoneNumber}
          />

          <input
            type="password"
            name="password"
            pattern=".{6,}"
            title="Six or more characters"
            required
            placeholder="Password"
          />

          <button className={styles.btn}>Create Account</button>
        </Form>
        <div className={styles.change}>
          <p>
            Login account
            <Link to="/login"> Click here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
