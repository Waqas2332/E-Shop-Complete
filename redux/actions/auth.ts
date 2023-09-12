import { registerationData } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data: registerationData) => {
    try {
      const response = await axios.post("/api/auth/signup", data);
      return response.data.message;
    } catch (error: any) {
      throw error?.response?.data.message;
    }
  }
);
