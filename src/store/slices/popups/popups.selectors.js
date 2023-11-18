export const selectOpenedPopup = (state, popup) => {
  switch(popup) {
    case 'edit-popup':
      return state.todos.isEditPopupOpen;

    case 'todo-popup':
      return state.todos.isTodoPopupOpen;

    case 'add-popup':
      return state.todos.isAddPopupOpen;

    default:
      return state.todos.isTodoPopupOpen;
  }
}