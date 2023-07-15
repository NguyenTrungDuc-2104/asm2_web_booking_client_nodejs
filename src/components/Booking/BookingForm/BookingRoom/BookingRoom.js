import { useSelector, useDispatch } from "react-redux";
import { checkboxAction } from "../../../../store/slice/checkbox";
import { upDateRoom } from "../../../../store/action/actionCheckbox";
import BookingRoomList from "./BookingRoomList";
import BookingTotal from "./BookingTotal";

import styles from "./BookingRoom.module.css";

const BookingRoom = () => {
  const roomRedux = useSelector((state) => state.room);
  const roomHotel = roomRedux.dataRoom;

  const checkboxRedux = useSelector((state) => state.checkbox);
  const dispatch = useDispatch();

  const changeRoomHandeler = (price, room) => {
    const valueRoom = { room, price };
    dispatch(checkboxAction.updateRoom(upDateRoom(checkboxRedux, valueRoom)));
  };

  return (
    <div className={styles.container_room}>
      <h2>Select Rooms</h2>
      <div className={styles.content_room}>
        {roomHotel._id &&
          roomHotel.rooms.map((item) => {
            return (
              <BookingRoomList
                key={item._id}
                room={item}
                onChangeRoom={changeRoomHandeler.bind(null, item.price)}
              />
            );
          })}
      </div>
      <BookingTotal />
    </div>
  );
};

export default BookingRoom;
