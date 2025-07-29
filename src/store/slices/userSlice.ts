import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string,
  isLogin: boolean,
  adminInfo: {
    name: string,
    isAdmin: boolean,
    profilePhoto: string
  }
}

const initialState: UserState = {
  email: "",
  isLogin: false,
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
    login: (
      state,
      action: PayloadAction<{ email: string }>
    ) => {
      state.email = action.payload.email;
      state.isLogin = true;
    },
    logout: (state) => {
      state.email = "";
      state.isLogin = false;
      state.adminInfo = initialState["adminInfo"];
    },
    getAdminInfo: (
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

export const { login, logout, getAdminInfo, updateAdminInfor } = userSlice.actions;
export default userSlice.reducer;
