import styles from "./SearchPopupOptions.module.css";

// component chua phan option
const SearchPopupOptions = () => {
  return (
    <div className={styles.container}>
      <p>Options</p>
      <div className={styles.form}>
        <div className={styles.form__content}>
          <label>Adult</label>
          <input type="number" placeholder="1" min="1" name="adult" />
        </div>

        <div className={styles.form__content}>
          <label>Children</label>
          <input type="number" placeholder="0" min="0" name="children" />
        </div>

        <div className={styles.form__content}>
          <label>Room</label>
          <input type="number" placeholder="1" min="1" name="room" />
        </div>
      </div>
    </div>
  );
};
export default SearchPopupOptions;
