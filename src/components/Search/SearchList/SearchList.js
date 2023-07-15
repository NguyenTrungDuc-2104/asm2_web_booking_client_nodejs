import { useSelector } from "react-redux";
import SearchListItem from "./SearchListItem";
import styles from "./SearchList.module.css";

const SearchList = () => {
  const data = useSelector((state) => state.dataSearch);

  return (
    <div className={styles.container}>
      {data.dataSearch.map((item, index) => {
        return <SearchListItem key={index} items={item} />;
      })}
    </div>
  );
};
export default SearchList;
