import styles from "./Detailimg.module.css";

const DetailImg = (props) => {
  return (
    <div className={styles.contanier}>
      {props.items.map((item, index) => {
        return <img key={index} src={item} className={styles.img} />;
      })}
    </div>
  );
};
export default DetailImg;
