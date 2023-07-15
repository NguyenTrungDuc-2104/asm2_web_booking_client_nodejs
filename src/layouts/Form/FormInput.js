import styles from "./FormInput.module.css";

const FormInput = () => {
  return (
    <form>
      <input
        type="email"
        placeholder="Your Email"
        className={styles.form__input}
      />
      <button className={styles.form__btn}>Subscribe</button>
    </form>
  );
};
export default FormInput;
