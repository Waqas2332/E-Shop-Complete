import { authInitialState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "../actions/auth";

const initialState: authInitialState = {
  success: false,
  isLoading: false,
  message: "",
  isAuth: false,
  statusCode: 0,
  error: "",
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.message = "";
        state.error = "";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.success = true;
        state.isLoading = false;
        state.isAuth = true;
        state.error = "";
        state.message = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.success = false;
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message!;
        state.statusCode = 409;
      })
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
        state.message = "";
        state.error = "";
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.success = true;
        state.isLoading = false;
        state.isAuth = true;
        state.error = "";
        state.message = action.payload?.message;
        state.user = action.payload?.user.username;
      })
      .addCase(signin.rejected, (state, action) => {
        state.success = false;
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message!;
        state.statusCode = 404;
      });
  },
});

export default authSlice.reducer;
export const { login } = authSlice.actions;
