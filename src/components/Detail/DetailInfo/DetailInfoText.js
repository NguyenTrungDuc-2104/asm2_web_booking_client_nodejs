import styles from "./DetailInfoText.module.css";

// component chua phan gioi thieu
const DetailInfoText = (props) => {
  return (
    <div className={styles.container}>
      <h2>{props.items.title}</h2>
      <p>{props.items.desc}</p>
    </div>
  );
};
export default DetailInfoText;
