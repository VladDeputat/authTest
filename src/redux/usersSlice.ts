import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CatsState {
  auth: {
    id: string;
    email: string;
  };
  users: User[];
}

interface User {
  email: string;
  id: string;
  createdAt: number;
}

const initialState: CatsState = {
  auth: {
    id: "",
    email: "",
  },
  users: [],
};

export const catsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    authAction: (state, action: PayloadAction<any>) => {
      state.auth = action.payload;
    },
    getAllUsersAction: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
    logoutAction: (state) => {
      state.auth = initialState.auth;
      state.users = initialState.users;
    },
  },
});

export const { getAllUsersAction, authAction, logoutAction } =
  catsSlice.actions;

export default catsSlice.reducer;
