import ReactDom from "react-dom";
import styles from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <div className={`${styles.modal} ${props.className}`}>
          {props.children}
        </div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default Modal;
