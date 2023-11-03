export const selectVisibleTodos = (state, filter = 'all') => {
  switch (filter) {
    case 'all': {
      return state.todos;
    }
    case 'active': {
      return state.todos.filter(todo => !todo.isDone);
    }
    case 'completed': {
      return state.todos.filter(todo => todo.isDone);
    }
    default: {
      return state.todos;
    }
  }
};