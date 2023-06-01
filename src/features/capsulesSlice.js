import { createSlice } from "@reduxjs/toolkit";

const capsulesSlice = createSlice({
  name: "capsules",
  initialState: {
    status: "",
    mission: "",
    reuseCount: "",
  },
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    changeMission: (state, action) => {
      state.mission = action.payload;
    },
    changeReuseCount: (state, action) => {
      state.reuseCount = action.payload;
    },
  },
});

export const { changeStatus, changeMission, changeReuseCount } =
  capsulesSlice.actions;
export default capsulesSlice;
