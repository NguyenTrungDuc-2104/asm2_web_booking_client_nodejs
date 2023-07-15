import { createSlice } from "@reduxjs/toolkit";

const initialValue = { dataRoom: {} };
const roomWithDateSlice = createSlice({
  name: "roomWithDate",
  initialState: initialValue,
  reducers: {
    update_room(state, action) {
      state.dataRoom = action.payload;
    },
  },
});

export const roomUpdateAction = roomWithDateSlice.actions;
export default roomWithDateSlice.reducer;
