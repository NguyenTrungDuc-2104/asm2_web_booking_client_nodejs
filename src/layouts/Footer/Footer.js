import FooterItem from "./FooterItem";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer__container}>
      {props.items.map((item) => {
        return <FooterItem key={item.col_number} items={item.col_values} />;
      })}
    </div>
  );
};
export default Footer;
