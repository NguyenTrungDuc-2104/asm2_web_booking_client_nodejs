import styles from "./SearchPopupDestination.module.css";

// component chua pha search destination
const SearchPopupDestination = () => {
  return (
    <div className={styles.container}>
      <label>Destination</label>
      <input type="text" name="destination" required />
    </div>
  );
};
export default SearchPopupDestination;
