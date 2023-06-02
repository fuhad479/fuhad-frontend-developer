import { createSlice } from "@reduxjs/toolkit";

const capsulesSlice = createSlice({
  name: "capsules",
  initialState: {
    status: "",
    serial: "",
    reuseCount: "",
  },
  reducers: {
    changeStatus(state, action) {
      state.status = action.payload;
    },
    changeSerial(state, action) {
      state.serial = action.payload.toUpperCase();
    },
    changeReuseCount(state, action) {
      state.reuseCount = action.payload;
    },
  },
});

export const { changeReuseCount, changeSerial, changeStatus } =
  capsulesSlice.actions;
export default capsulesSlice
