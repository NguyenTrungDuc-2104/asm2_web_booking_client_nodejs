import { useRouteLoaderData } from "react-router-dom";

import styles from "./BookingHeader.module.css";
const BookingHeader = () => {
  const hotel = useRouteLoaderData("detail-hotel");
  return (
    <div className={styles.container_booking_header}>
      <h1>{hotel.name}</h1>
      <div className={styles.content_boooking_header}>
        <p>{hotel.desc}</p>
        <div className={styles.booking_header_card}>
          <p>
            <strong>${hotel.cheapestPrice}</strong> (1 Night)
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;
