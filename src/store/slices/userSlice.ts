import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string,
  status: "LOADING" | "AUTHENTICATED" | "UNAUTHENTICATED",
  adminInfo: {
    name: string,
    isAdmin: boolean,
    profilePhoto: string
  }
}

const initialState: UserState = {
  email: "",
  status: "LOADING",
  adminInfo: {
    name: "",
    isAdmin: false,
    profilePhoto: ""
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    status: (state, 
      action: PayloadAction<{ status: UserState["status"] }>
    ) => {
      state.status = action.payload.status;
    },
    login: (
      state,
      action: PayloadAction<{ email: string }>
    ) => {
      state.email = action.payload.email;
      state.status = "AUTHENTICATED";
    },
    logout: (state) => {
      state.email = "";
      state.status = "UNAUTHENTICATED";
      state.adminInfo = initialState["adminInfo"];
    },
    fetchAdminInfo: (
      state,
      action: PayloadAction<{ adminInfo: UserState["adminInfo"] }>
    ) => {
      state.adminInfo = action.payload.adminInfo;
    },
    updateAdminInfor: (
      state,
      action: PayloadAction<{ adminInfo: UserState["adminInfo"] }>
    ) => {
      state.adminInfo = { ...state.adminInfo, ...action.payload.adminInfo };
    },
  },
});

export const {status, login, logout, fetchAdminInfo, updateAdminInfor } = userSlice.actions;
export default userSlice.reducer;
