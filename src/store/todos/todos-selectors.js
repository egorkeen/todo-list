export const selectVisibleTodos = (state, filter = 'all') => {
  switch (filter) {
    case 'all': {
      return state.todos;
    }
    case 'active': {
      return state.todos.filter(todo => !todo.isCompleted);
    }
    case 'completed': {
      return state.todos.filter(todo => todo.isCompleted);
    }
    default: {
      return state.todos;
    }
  }
};