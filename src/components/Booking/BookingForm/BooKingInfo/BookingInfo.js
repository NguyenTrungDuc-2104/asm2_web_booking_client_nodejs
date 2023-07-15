import styles from "./BookingInfo.module.css";

const BookingInfo = () => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const [user] = userLocal.user;
  return (
    <div className={styles.container_info}>
      <h2>Reserve Info</h2>
      <div className={styles.content_info}>
        <div className={styles.input_info}>
          <label htmlFor="fullName">Your Full Name:</label>
          <input
            type="text"
            defaultValue={user.fullName}
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            required
          />
        </div>

        <div className={styles.input_info}>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            defaultValue={user.email}
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className={styles.input_info}>
          <label htmlFor="phoneNumber">Your Phone Number</label>
          <input
            type="number"
            defaultValue={user.phoneNumber}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            pattern=".{10}"
            title="Phone number must consist of 10 numbers "
            required
          />
        </div>

        <div className={styles.input_info}>
          <label htmlFor="cardNumber">Your Identity Card Number</label>
          <input
            type="number"
            id="cardNumber"
            name="cardNumber"
            placeholder="Card Number"
            pattern=".{12}"
            title="Identity Card Number must consist of 12 numbers"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
