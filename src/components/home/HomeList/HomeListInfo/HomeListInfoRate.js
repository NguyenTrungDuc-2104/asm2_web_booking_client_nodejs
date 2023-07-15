import styles from "./HomeListInfoRate.module.css";

// component danh gia cua khach san
const HomeListInfoRate = (props) => {
  return (
    <div className={styles.container}>
      <p>{props.items.rate}</p>
      <p>{props.items.type}</p>
    </div>
  );
};
export default HomeListInfoRate;
