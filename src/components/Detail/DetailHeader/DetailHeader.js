import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./DetailHeader.module.css";

const DetailHeader = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/*tiêu đề*/}
        <h2>{props.items.name}</h2>
        {/*hiển thị địa chỉ*/}
        <div className={styles.address}>
          <FaMapMarkerAlt />
          <p>{props.items.address}</p>
        </div>
        {/*các text còn lại*/}
        <p
          className={styles.distance}
        >{`Excellent location - ${props.items.distance}m from center`}</p>
        <p
          className={styles.price}
        >{`Book a stay over $${props.items.cheapestPrice} at this property`}</p>
      </div>
    </div>
  );
};
export default DetailHeader;
