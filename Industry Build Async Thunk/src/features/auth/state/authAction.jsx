import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "/auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await api.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success(`Hi ${res.data.firstName}`)
      return res.data;
    } catch (err) {
      thunkApi.rejectWithValue("Login Failed !!!");
    }
  },
);
export const hyderateUserAction = createAsyncThunk(
  "/auth/me",
  async (_, thunkApi) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      toast.success(`Welcome back ${res.data.firstName} 😊`)
      return res.data;
    } catch (error) {
      toast.error("Unauthorized User");
      thunkApi.rejectWithValue("No Logged In User Found");
    }
  },
);
