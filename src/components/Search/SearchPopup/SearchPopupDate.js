import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Modal from "../../../UI/overlay/Modal";
import styles from "./SearchPopupDate.module.css";

const SearchPopupDate = () => {
  // date state
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ]);

  // state dùng để ẩn hiện lịch
  const [open, setOpen] = useState(false);

  //--------------hiden modal---------------
  useEffect(() => {
    const hidenModal = (e) => {
      if (e.key === "Escape" || e.key === "Enter") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", hidenModal);
    return () => {
      document.removeEventListener("keydown", hidenModal);
    };
  }, []);

  const hidenDateRangeHandler = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <label>
        <input
          className={styles.inputBox}
          value={`${format(dateState[0].startDate, "MM/dd/yyyy")} to ${format(
            dateState[0].endDate,
            "MM/dd/yyyy"
          )}`}
          readOnly
          type="text"
          onClick={() => {
            setOpen((open) => !open);
          }}
          name="date"
        />
      </label>
      {/*ẩn hiện lịch*/}
      {open && (
        <Modal className={styles.date} onConfirm={hidenDateRangeHandler}>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDateState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateState}
            minDate={new Date()}
          />
        </Modal>
      )}
    </div>
  );
};
export default SearchPopupDate;
