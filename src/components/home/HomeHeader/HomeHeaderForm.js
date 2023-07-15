import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataSearchAction } from "../../../store/slice/dataSearch";
import { useNavigate, useFetcher } from "react-router-dom";
import styles from "./HomeHeaderForm.module.css";
import { FaBed } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

import DateInput from "./HomeHeaderDate";

const HomeHeaderForm = () => {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const dispath = useDispatch();

  const { data, state } = fetcher;

  //----- tìm khách sạn và lưu vào redux----
  useEffect(() => {
    if (state === "idle" && data) {
      if (data.length === 0) {
        return window.alert("No matching hotel found");
      }
      dispath(dataSearchAction.add_data(data));
      navigate("/search");
    }
  }, [data, state]);

  return (
    <fetcher.Form className={styles.form} method="post" action="/">
      <label>
        <FaBed className={styles.icon} />
        <input
          type="text"
          placeholder="Where are you going?"
          name="destination"
          required
        />
      </label>
      <DateInput />
      <label>
        <BsFillPeopleFill className={styles.icon} />
        <input
          type="text"
          required
          placeholder="1 adult - 0 children - 1 room"
          name="peopleRoom"
          className={styles.inputPeopleRoom}
        />
      </label>
      {state !== "idle" && <span className={`${styles.loaderSearch} loader`} />}
      {state === "idle" && (
        <button type="submit" className={styles.search_btn}>
          Search
        </button>
      )}
    </fetcher.Form>
  );
};
export default HomeHeaderForm;
