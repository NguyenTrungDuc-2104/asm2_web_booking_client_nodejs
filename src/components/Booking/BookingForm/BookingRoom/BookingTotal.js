import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./BookingTotal.module.css";

const BookingTotal = () => {
  const [isTotal, setIsTotal] = useState(0);

  const checkboxRedux = useSelector((state) => state.checkbox);
  const dateRedux = useSelector((state) => state.date);
  const startDate = new Date(dateRedux.startDate);
  const endDate = new Date(dateRedux.endDate);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  useEffect(() => {
    setIsTotal((prev) => checkboxRedux.total * diffDays);
  }, [checkboxRedux.total, diffDays]);

  return (
    <div className={styles.container_total}>
      <h2>Total Bill: ${isTotal}</h2>
      <div className={styles.content_total}>
        <select name="payment" required>
          <option value="">Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash">Cash</option>
        </select>
        <input value={isTotal} name="total" type="number" readOnly />
        <button>Reserve Now</button>
      </div>
    </div>
  );
};

export default BookingTotal;
