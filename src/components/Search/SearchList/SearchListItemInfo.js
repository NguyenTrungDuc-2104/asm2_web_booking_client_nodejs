import styles from "./SearchListItemInfo.module.css";

//component chua thong tin cua mot khach san

const SearchListItemInfo = ({ items }) => {
  let free;
  if (items.featured) {
    free = (
      <div className={styles.free}>
        <p>Free cancellation</p>
        <p>You can cancel later, so lock in this great price today!</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h2>{items.name}</h2>
      <div className={styles.content}>
        <p>{`${items.distance}m from center`}</p>
        <p className={styles.tag}>{items.city}</p>
        <p className={styles.description}>{items.desc}</p>
        <p>{items.type}</p>
        {free}
      </div>
    </div>
  );
};
export default SearchListItemInfo;
