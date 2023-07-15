import SearchListItemInfo from "./SearchListItemInfo";
import SearchListItemSee from "./SearchListItemSee";

import styles from "./SearchListItem.module.css";

// component con chua thong tin va hinh anh cua mot khach san
const SearchListItem = ({ items }) => {
  const img_url = items.photos.length > 0 ? items.photos[0] : null;
  return (
    <div className={styles.container}>
      <div className={styles.content_img}>
        <img src={img_url} alt={items.name} className={styles.img} />
      </div>
      <div className={styles.content}>
        <SearchListItemInfo items={items} />
        <SearchListItemSee items={items} />
      </div>
    </div>
  );
};
export default SearchListItem;
