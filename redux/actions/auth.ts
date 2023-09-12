import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk("auth/signup", async (data) => {
  try {
    const response = await axios.post("/api/auth/signup", data);
    console.log(response);
  } catch (error) {
    throw error;
  }
});
