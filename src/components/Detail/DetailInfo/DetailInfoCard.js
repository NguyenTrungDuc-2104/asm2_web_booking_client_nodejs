import { Link } from "react-router-dom";
import styles from "./DetailinfoCard.module.css";

// component chua phan  gia tien
const DetailInfoCard = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.content}>
        <span>${props.items.cheapestPrice}</span> (1 night)
      </p>

      <Link to="booking" className={styles.link}>
        Reserve or Book Now!
      </Link>
    </div>
  );
};

export default DetailInfoCard;
