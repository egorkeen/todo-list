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

    removeCurrentUser: (state, action) => {
      state.me = {};
      localStorage.removeItem("me");
    },
  },
  initialState: initialState,
});

export const { setCurrentUser, removeCurrentUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;