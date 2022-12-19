import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  customerId: localStorage.getItem("customerId"),
  customerDetails: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("customerId", action.payload.customerId);
      state.token = action.payload.token;
      state.customerId = action.payload.customerId;
    },
    removeToken: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("customerId");
      localStorage.removeItem("cartTokenValue");

      state.token = null;
      state.customerId = null;
      state.customerDetails = null;
    },
    setCustomerDetails: (state, action) => {
      state.customerDetails = action.payload.customerDetails;
    },
  },
});

export default authSlice.reducer;
export const { setToken, removeToken, setCustomerDetails } = authSlice.actions;
