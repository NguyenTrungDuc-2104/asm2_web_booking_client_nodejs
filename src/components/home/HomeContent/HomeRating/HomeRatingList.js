import { Link } from "react-router-dom";
import styles from "./HomeRatingList.module.css";
const HomeRatingList = ({ hotels }) => {
  return (
    <div className={styles.container_ratingList}>
      <img src={hotels.photos[0]} alt={hotels.name} />
      <div className={styles.content_ratingList}>
        <Link to={`detail/${hotels._id}`}>{hotels.name}</Link>
        <p>{hotels.city}</p>
        <p>Starting from ${hotels.cheapestPrice}</p>
      </div>
    </div>
  );
};

export default HomeRatingList;
