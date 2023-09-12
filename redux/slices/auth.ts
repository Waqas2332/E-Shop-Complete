import { authInitialState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../actions/auth";

const initialState: authInitialState = {
  status: "idle",
  isLoading: false,
  error: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "active";
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state) => {
        state.status = "idle";
        state.isLoading = false;
        state.isAuth = true;
      });
  },
});

export default authSlice.reducer;
