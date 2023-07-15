import React from "react";
import { Link } from "react-router-dom";
import HomeListInfoRate from "./HomeListInfoRate";
import styles from "./HomeListInfoText.module.css";

// component thong tin khach san

const HomeListInfoText = (props) => {
  return (
    <div className={styles.container}>
      <Link to="/detail">{props.items.name}</Link>
      <p className={styles.city}>{props.items.city}</p>
      <p className={styles.rate}>{"Starting from $" + props.items.price}</p>
      <HomeListInfoRate items={props.items} />
    </div>
  );
};
export default HomeListInfoText;
