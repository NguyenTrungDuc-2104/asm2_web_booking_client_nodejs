import { createSlice } from "@reduxjs/toolkit";

const initialValue = { startDate: "", endDate: "" };
const dateSlice = createSlice({
  name: "date",
  initialState: initialValue,
  reducers: {
    update_date(state, action) {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export const dateAction = dateSlice.actions;

export default dateSlice.reducer;
