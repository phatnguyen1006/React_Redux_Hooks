
// Action:
let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: nextTodoId++,
      text,
      completed: false
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id
    }
  }
}

export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    payload: {
      filter
    }
  }
}