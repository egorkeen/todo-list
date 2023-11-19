export const selectOpenedPopup = (state, popup) => {
  switch(popup) {
    case 'edit-popup':
      return state.popups.isEditPopupOpen;

    case 'todo-popup':
      return state.popups.isTodoPopupOpen;

    case 'add-popup':
      return state.popups.isAddPopupOpen;

    default:
      return state.popups.isTodoPopupOpen;
  }
}