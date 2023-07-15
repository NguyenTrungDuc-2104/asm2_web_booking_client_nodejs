import { createSlice } from "@reduxjs/toolkit";

const initialValue = { dataSearch: [] };
const dataSearchSlice = createSlice({
  name: "dateSearch",
  initialState: initialValue,
  reducers: {
    add_data(state, action) {
      state.dataSearch = action.payload;
    },
    reset_data(state) {
      state.dataSearch = [];
    },
  },
});

export const dataSearchAction = dataSearchSlice.actions;
export default dataSearchSlice.reducer;
