import styles from "./FooterItem.module.css";

const FooterItem = (props) => {
  return (
    <div className={styles.content}>
      {props.items.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};
export default FooterItem;
