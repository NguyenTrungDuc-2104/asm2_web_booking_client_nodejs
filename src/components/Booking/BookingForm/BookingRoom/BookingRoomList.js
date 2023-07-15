import styles from "./BookingRoomList.module.css";

const BookingRoomList = ({ room, onChangeRoom }) => {
  const checkboxChangeHandler = (e) => {
    onChangeRoom({
      _id: room._id,
      roomNumber: +e.target.value,
    });
  };

  return (
    <div className={styles.container_room_list}>
      <h3>{room.title}</h3>

      <div className={styles.content_room_list}>
        <div className={styles.content_room_text}>
          <p>{room.desc}</p>
          <p>
            Max people: <strong>{room.maxPeople}</strong>
          </p>
          <p>${room.price}</p>
        </div>

        <div className={styles.content_room_input}>
          {room.roomNumbers.length > 0 &&
            room.roomNumbers.map((item, index) => {
              return (
                <div key={index} className={styles.content_room_checkbox}>
                  <label>{item}</label>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={checkboxChangeHandler}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BookingRoomList;
