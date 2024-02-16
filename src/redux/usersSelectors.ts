import { RootState } from "./store";

// Other code such as selectors can use the imported `RootState` type
export const getAllUsersSelector = (state: RootState) => state.data.users;

export const isAuthSelector = (state: RootState) => !!state.data.auth.id;
export const userEmailSelector = (state: RootState) => state.data.auth.email;
