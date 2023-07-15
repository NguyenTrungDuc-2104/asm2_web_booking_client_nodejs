import { Link } from "react-router-dom";
import HomeHeaderForm from "./HomeHeaderForm";
import Background_blue from "../../../UI/Background_blue";
import styles from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <Background_blue className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>
          <h1>A lifetime of discounts? It's Genius.</h1>
          <p>
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free account
          </p>
          <Link to="/register" className={styles.register}>
            Register
          </Link>
        </div>
        <div className={styles.search} method="post" action="/">
          <HomeHeaderForm />
        </div>
      </div>
    </Background_blue>
  );
};
export default HomeHeader;
