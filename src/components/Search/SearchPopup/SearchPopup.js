import { Form, useNavigation } from "react-router-dom";
import SearchPopupDestination from "./SearchPopupDestination";
import SearchPopupDate from "./SearchPopupDate";
import SearchPopupOptions from "./SearchPopupOptions";

import styles from "./SearchPopup.module.css";

const SearchPopup = () => {
  const navigation = useNavigation();
  return (
    <div className={styles.container}>
      <h2>Search</h2>
      <Form className={styles.content} method="post">
        <div className={styles.form}>
          <SearchPopupDestination />
          <SearchPopupDate />
          <SearchPopupOptions />
        </div>

        <button className={styles.btn}>
          {navigation.state !== "idle" && (
            <span className={`${styles.loaderSearch} loader`} />
          )}
          {navigation.state === "idle" && "Search"}
        </button>
      </Form>
    </div>
  );
};
export default SearchPopup;
