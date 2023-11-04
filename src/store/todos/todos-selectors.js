export const selectVisibleTodos = (state, filter = 'all') => {
  switch (filter) {
    case 'all': {
      return state.todos.list;
    }
    case 'active': {
      return state.todos.list.filter((todo) => !todo.isCompleted);
    }
    case 'completed': {
      return state.todos.list.filter((todo) => todo.isCompleted);
    }
    default: {
      return state.todos.list;
    }
  }
};

export const selectSelectedTodo = (state) => {
  return state.todos.selectedTodo;
};

export const selectCurrentFilter = (state) => state.todos.currentFilter;