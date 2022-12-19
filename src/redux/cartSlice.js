import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenValue: localStorage.getItem("cartTokenValue"),
  items: [],
  id: null,
};
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setTokenValue: (state, action) => {
      localStorage.setItem("cartTokenValue", action.payload.tokenValue);
      state.tokenValue = action.payload.tokenValue;
    },
  },
});

export default cartSlice.reducer;

export const { setTokenValue } = cartSlice.actions;
