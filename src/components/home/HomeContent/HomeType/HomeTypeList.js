import styles from "./HomeTypeList.module.css";
const HomeTypeList = ({ item }) => {
  return (
    <div className={styles.container_list}>
      <img src={item.imageType} alt={item.type} className={styles.img_type} />
      <div className={styles.text_type}>
        <p>{item.type}</p>
        <p>{item.count}</p>
      </div>
    </div>
  );
};
export default HomeTypeList;
