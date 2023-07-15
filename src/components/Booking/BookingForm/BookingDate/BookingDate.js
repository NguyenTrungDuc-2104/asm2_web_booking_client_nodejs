import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { roomUpdateAction } from "../../../../store/slice/roomWithDate";
import { dateAction } from "../../../../store/slice/date";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./BookingDate.module.css";

const BookingDate = () => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const { detailId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const dateRef = useRef("");
  //-----gửi date lên server để check-----
  const checkRommWithDate = async (dateStart, dateEnd) => {
    if (new Date(dateStart).getTime() === new Date(dateEnd).getTime()) {
      return;
    }
    const body = {
      dateStart,
      dateEnd,
    };

    if (!userLocal) {
      return navigate("/login");
    }
    const [user] = userLocal.user;
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL +
          `/detail/${detailId}/check_room_with_date`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user._id,
          },
          body: JSON.stringify(body),
        }
      );
      if (!response.ok) {
        throw new Error({ message: "check_room_error" });
      }
      const dataRoom = await response.json();
      dispatch(roomUpdateAction.update_room(dataRoom));
    } catch (err) {
      console.log("check room with date error", err.message);
    }
  };

  useEffect(() => {
    const [startDate, endDate] = dateRef.current.value.split(" to ");
    //----check room với date đã chọn----
    checkRommWithDate(startDate, endDate);
    //---ghi date vào date trong Redux---
    dispatch(dateAction.update_date({ startDate, endDate }));
  }, [dateState]);

  //-------------------------
  const changeDateHandler = (date) => {
    setDateState([date.selection]);
  };

  return (
    <div className={styles.container_date}>
      <h2>Dates</h2>
      <input
        type="text"
        value={`${format(dateState[0].startDate, "MM/dd/yyyy")} to ${format(
          dateState[0].endDate,
          "MM/dd/yyyy"
        )}`}
        readOnly
        ref={dateRef}
        name="date"
      />
      <DateRange
        editableDateInputs={true}
        onChange={changeDateHandler}
        moveRangeOnFirstSelection={false}
        ranges={dateState}
        minDate={new Date()}
      />
    </div>
  );
};
export default BookingDate;
