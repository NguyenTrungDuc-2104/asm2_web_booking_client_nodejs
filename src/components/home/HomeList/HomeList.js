import HomeListCity from "./HomeListCity/HomeListCity";
import HomeListType from "./HomeListType/HomeListType";
import styles from "./HomeList.module.css";
import HomeListInfo from "./HomeListInfo/HomeListInfo";
const HomeList = () => {
  return (
    <div className={styles.container}>
      <HomeListCity />
      <HomeListType />
      <HomeListInfo />
    </div>
  );
};
export default HomeList;
