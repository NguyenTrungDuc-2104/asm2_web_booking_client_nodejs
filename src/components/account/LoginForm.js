import { Form, Link, useNavigate } from "react-router-dom";
import Background_blue from "../../UI/Background_blue.js";
import styles from "./Form.module.css";
const LoginForm = () => {
  const navigate = useNavigate();
  const signUpHandler = () => {
    navigate("/register");
  };
  return (
    <>
      <Background_blue>
        <nav className={styles.nav}>
          <Link to="/">Booking</Link>
          <div className={styles.nav_content}>
            <button onClick={signUpHandler}>Sign Up</button>
            <button type="submit" form="login_form">
              Login
            </button>
          </div>
        </nav>
      </Background_blue>

      <div className={styles.container}>
        <h1 className="lg">Login</h1>
        <Form
          method="POST"
          action="/login"
          className={styles.form}
          id="login_form"
        >
          <input type="email" name="email" required placeholder="Email" />
          <input
            type="password"
            name="password"
            pattern=".{6,}"
            title="6 or more characters"
            required
            placeholder="Password"
          />
          <button className={styles.btn}>Login</button>
        </Form>
        <div className={styles.change}>
          <p>
            Create account
            <Link to="/register"> Click here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
