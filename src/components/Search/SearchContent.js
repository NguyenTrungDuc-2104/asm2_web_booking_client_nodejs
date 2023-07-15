import Card from "../../UI/Cart";
import SearchPopup from "./SearchPopup/SearchPopup";
import SearchList from "./SearchList/SearchList";
import styles from "./SearchContent.module.css";

const SearchContent = () => {
  return (
    <Card className={styles.container}>
      <SearchPopup />
      <SearchList />
    </Card>
  );
};
export default SearchContent;
