import { loginData, registerationData } from "@/types";
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

export const signin = createAsyncThunk(
  "auth/signin",
  async (data: loginData) => {
    try {
      const response = await axios.post("/api/auth/login", data);
      console.log(response);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw error?.response?.data.message;
    }
  }
);
