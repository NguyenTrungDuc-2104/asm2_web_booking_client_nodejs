import Background_blue from "../../UI/Background_blue";
import FormInput from "./FormInput";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <Background_blue>
      <div className={styles.form__container}>
        <div className={styles.form__text}>
          <h1>Save time, save mone!</h1>
          <p>Sign up and we'll send the best deals to you</p>
        </div>
        <FormInput />
      </div>
    </Background_blue>
  );
};
export default Form;
