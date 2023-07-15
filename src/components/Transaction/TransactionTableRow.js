import styles from "./TransactionTable.module.css";

// ---------render ra các trnasaction------------
const TransactionTableRow = ({ dataRow, stt }) => {
  const sttRow = (stt + 1).toString().padStart(2, "0");

  //---lấy các số phòng của các room khác nhau room:[{_id,roomNumber},{_id,roomNumber},...]----
  let roomNumber = [];
  dataRow.room.forEach((room) => {
    roomNumber = [...roomNumber, ...room.roomNumber];
  });
  const roomNum = roomNumber.join(", ");
  const classStatus =
    dataRow.status === "Booked"
      ? styles.table_status_booked
      : dataRow.status === "Checkin"
      ? styles.table_status_checkin
      : styles.table_status_checkout;
  return (
    <tr className={styles.table_row}>
      <td>{sttRow}</td>
      <td>{dataRow.hotel.title}</td>
      <td>{roomNum}</td>
      <td>
        {dataRow.dateStart} - {dataRow.dateEnd}
      </td>
      <td>${dataRow.price}</td>
      <td>{dataRow.payment}</td>
      <td>
        <p className={classStatus}>{dataRow.status}</p>
      </td>
    </tr>
  );
};
export default TransactionTableRow;
