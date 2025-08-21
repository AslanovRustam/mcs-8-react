import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const selectValue = state => state.balance.value;

export const useBalance = () => useSelector(selectValue);

const slice = createSlice({
  name: "balance",
  initialState: {
    value: 100,
  },
  reducers: {
    deposit(state, action) {
      state.value += action.payload;
    },
    withdraw(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;

export default slice.reducer;
