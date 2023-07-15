import { Link } from "react-router-dom";
import styles from "./SearchListItemSee.module.css";

// component chua phan danh gia, gia cua mot khach san
const SearchListItemSee = ({ items }) => {
  const detailId = items._id;
  return (
    <div className={styles.container}>
      <div className={styles.rate}>
        <p>{items.rate_text}</p>
        <p>{items.rating}</p>
      </div>
      <div className={styles.seeMore}>
        <p>{`$${items.cheapestPrice}`}</p>
        <p>Includes taxes and fees</p>
        <Link to={`/detail/${detailId}`} className={styles.btn}>
          See availability
        </Link>
      </div>
    </div>
  );
};

export default SearchListItemSee;
