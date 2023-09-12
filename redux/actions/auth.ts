import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk("auth/signup", async (data) => {
  try {
    const response = await axios.post("/api/auth/signup", data);
    return response.data.message;
  } catch (error) {
    throw error?.response?.data.message;
  }
});
