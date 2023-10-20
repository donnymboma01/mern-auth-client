/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

// Ceci est uniquement l'état du User.
// Le but du slice et de couper l'état en des petits états  "independants"  afin de mieux les gérer.
const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },

    signinFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signinStart, signinSuccess, signinFailure } = userSlice.actions;
export default userSlice.reducer;
