import { createSlice } from "@reduxjs/toolkit";

const initialValue = { isLogin: false, user: [] };
const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    on_login(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },
    on_logout(state) {
      state.isLogin = false;
      state.user = [];
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
