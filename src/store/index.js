import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user";
import checkboxSlice from "./slice/checkbox";
import dateSlice from "./slice/date";
import roomWithDateSlice from "./slice/roomWithDate";
import dataSearchSlice from "./slice/dataSearch";

const store = configureStore({
  reducer: {
    user: userSlice,
    checkbox: checkboxSlice,
    date: dateSlice,
    room: roomWithDateSlice,
    dataSearch: dataSearchSlice,
  },
});

export default store;
