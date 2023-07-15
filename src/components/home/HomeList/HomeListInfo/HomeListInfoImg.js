import HomeListInfoText from "./HomeListInfoText";
import styles from "./HomeListInfoImg.module.css";

// mot component hinh anh trong list
const HomeListInfoImg = (props) => {
  return (
    <div>
      <img src={props.items.image_url} className={styles.img} />
      <HomeListInfoText items={props.items} />
    </div>
  );
};
export default HomeListInfoImg;
