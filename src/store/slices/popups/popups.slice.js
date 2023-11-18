import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddPopupOpen: false,
  isEditPopupOpen: false,
  isTodoPopupOpen: false,
};

const popupsSlice = createSlice({
  name: "@@popups",
  reducers: {
    toggleEditPopup: (state, action) => {
      state.isEditPopupOpen = action.payload;
    },

    toggleAddPopup: (state, action) => {
      state.isAddPopupOpen = action.payload;
    },

    toggleTodoPopup: (state, action) => {
      state.isTodoPopupOpen = action.payload;
    },
  },
  initialState: initialState,
});

export const { toggleEditPopup, toggleAddPopup, toggleTodoPopup } = popupsSlice.actions;

export const popupsReducer = popupsSlice.reducer;