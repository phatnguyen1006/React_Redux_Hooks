
// reducers:
// Todo: 
const Todo = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return action.payload;
    case "TOGGLE_TODO":
      // Nhan vao 1 todo => return list khong mang todo Toggled
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, {completed: !state.completed});
    default:
      return state;
  }
}

// Todos:

const todos = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, Todo(undefined,action)];
    case "TOGGLE_TODO":
      return state.map(t => Todo(t,action));
    default:
      return state;
  }
}

export default todos;