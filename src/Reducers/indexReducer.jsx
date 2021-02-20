import { combineReducers } from "redux";

// reducers
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";


const Reducer = combineReducers({
  todos,
  visibilityFilter
})

export default Reducer;