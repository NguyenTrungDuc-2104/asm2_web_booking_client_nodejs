import styles from "./HomeListTypeImg.module.css";

// mot component con trong list
const HomeListTypeImg = (props) => {
  return (
    <div>
      <img src={props.items.image} className={styles.img} />
      <div className={styles.text}>
        <p>{props.items.name}</p>
        <p>{`${props.items.count} hotels`}</p>
      </div>
    </div>
  );
};
export default HomeListTypeImg;
