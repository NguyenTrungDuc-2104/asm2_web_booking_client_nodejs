import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkboxAction } from "../../../store/slice/checkbox";
import { Form, useLocation } from "react-router-dom";
import BookingDate from "./BookingDate/BookingDate";
import BookingInfo from "./BooKingInfo/BookingInfo";
import BookingRoom from "./BookingRoom/BookingRoom";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  const location = useLocation();
  const checkboxRedux = useSelector((state) => state.checkbox);
  const dateRedux = useSelector((state) => state.date);
  const dispatch = useDispatch();
  const dateStart = new Date(dateRedux.startDate);
  const dateEnd = new Date(dateRedux.endDate);
  const timeDiff = dateEnd.getTime() - dateStart.getTime();
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  //---check input truoc khi request---
  const checkSubmitHandler = (e) => {
    if (checkboxRedux.roomSelect.length === 0) {
      window.alert("Please select room");
      return e.preventDefault();
    }
    if (diffDays === 0) {
      window.alert("Please select date");
      return e.preventDefault();
    }
  };
  //----reset checkbox redux khi chuyển page----
  useEffect(() => {
    dispatch(checkboxAction.resetRoom());
  }, [location]);
  return (
    <Form method="POST" onSubmit={checkSubmitHandler}>
      <div className={styles.container_dateInfo}>
        <BookingDate />
        <BookingInfo />
      </div>
      <BookingRoom />
      {/* dùng để lấy được giá trị checkbox ở action trong Booking */}
      <input
        value={JSON.stringify(checkboxRedux.roomSelect)}
        readOnly
        name="checkbox"
        style={{ display: "none" }}
      />
    </Form>
  );
};
export default BookingForm;
