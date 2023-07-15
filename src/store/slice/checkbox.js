import { createSlice } from "@reduxjs/toolkit";

const initialValue = { roomSelect: [], total: 0 };

const checkboxSlice = createSlice({
  name: "checkbox",
  initialState: initialValue,
  reducers: {
    updateRoom(state, action) {
      state.roomSelect = action.payload.roomSelect;
      state.total = action.payload.total;
    },
    resetRoom(state) {
      state.roomSelect = [];
      state.total = 0;
    },
  },
});

export const checkboxAction = checkboxSlice.actions;

export default checkboxSlice.reducer;
