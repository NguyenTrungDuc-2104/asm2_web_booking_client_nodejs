import styles from "./Background_blue.module.css";
const Background_blue = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};
export default Background_blue;
