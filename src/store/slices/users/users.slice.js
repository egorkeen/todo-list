import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: {},
};

const usersSlice = createSlice({
  name: "@@users",
  reducers: {
    setCurrentUser: (state, action) => {
      state.me = action.payload;
      localStorage.setItem("me", JSON.stringify(action.payload));
    },
  },
  initialState: initialState,
});

export const { setCurrentUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;