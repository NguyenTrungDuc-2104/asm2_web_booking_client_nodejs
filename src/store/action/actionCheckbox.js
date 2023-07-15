// roomArray={_id:'',roomNumber:[],total:0}

export const upDateRoom = (checkboxRedux, payload) => {
  let roomArray = checkboxRedux.roomSelect;
  let total = checkboxRedux.total;
  //--- nếu rooArray rỗng thì thêm vô luôn không cần check---
  if (roomArray.length === 0) {
    return {
      roomSelect: [
        ...roomArray,
        { _id: payload.room._id, roomNumber: [payload.room.roomNumber] },
      ],
      total: payload.price,
    };
  }
  //-----check room đó đã tồn tại hay chưa----
  let updateTotal;
  const roomExistsIndex = roomArray.findIndex(
    (item) => item._id === payload.room._id
  );
  //-----nếu chưa thì thêm vào roomArray----
  if (roomExistsIndex === -1) {
    updateTotal = total + payload.price;
    return {
      roomSelect: [
        ...roomArray,
        { _id: payload.room._id, roomNumber: [payload.room.roomNumber] },
      ],
      total: updateTotal,
    };
  }
  //----nếu đã tồn tại thì check tới số phòng----
  let roomExists = roomArray[roomExistsIndex];
  let updateRoomArray;
  let roomUpdate;
  let roomNumberUpdate;
  const roomNumberExists = roomExists.roomNumber.find(
    (item) => item === payload.room.roomNumber
  );
  //---nếu phòng đó chưa có trong roomNumber thì thêm vào ----
  if (!roomNumberExists) {
    updateTotal = total + payload.price;
    //----update lại số phòng---
    roomNumberUpdate = [...roomExists.roomNumber, payload.room.roomNumber];
    //---sau khi update lại số phòng thì update lại room---
    roomUpdate = { ...roomExists, roomNumber: roomNumberUpdate };
    //---update lại roomArray---
    updateRoomArray = [...roomArray];
    updateRoomArray[roomExistsIndex] = roomUpdate;
    return { roomSelect: updateRoomArray, total: updateTotal };
  }
  // --- nếu đã có thì xóa khỏi mảng roomNumber---
  if (roomNumberExists) {
    updateTotal = total - payload.price;

    roomNumberUpdate = roomExists.roomNumber.filter(
      (item) => item !== payload.room.roomNumber
    );
    //---sau khi xóa khỏi roomNumber, nếu trong mảng vẫn còn phần tử thì update lại ---
    if (roomNumberUpdate.length > 0) {
      //---sau khi update lại số phòng thì update lại room---

      roomUpdate = { ...roomExists, roomNumber: roomNumberUpdate };
      //---update lại roomArray---
      updateRoomArray = [...roomArray];
      updateRoomArray[roomExistsIndex] = roomUpdate;
      return { roomSelect: updateRoomArray, total: updateTotal };
      //---nếu mảng đó rỗng thì xóa room đó khỏi mảng roomArray---
    } else {
      roomArray = roomArray.filter((item) => item._id !== payload.room._id);
      return { roomSelect: roomArray, total: updateTotal };
    }
  }
};
