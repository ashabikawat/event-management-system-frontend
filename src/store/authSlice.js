"use client";
import { createSlice } from "@reduxjs/toolkit";

const storedUser =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;

const storedToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken ? JSON.parse(storedToken) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuthDetails: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
  },
});

export const { addAuthDetails, setToken } = authSlice.actions;
export default authSlice.reducer;
