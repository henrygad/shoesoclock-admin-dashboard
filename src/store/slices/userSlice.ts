import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  isAdmin: boolean;
}

const initialState: UserState = {
  name: "",
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ name: string; isAdmin: boolean }>
    ) => {
      state.name = action.payload.name;
      state.isAdmin = action.payload.isAdmin;
    },
    logout: (state) => {
      state.name = "";
      state.isAdmin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
