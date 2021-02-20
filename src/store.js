import { createStore } from "redux";
import Reducer from "./Reducers/indexReducer";

const store = createStore(Reducer)

export default store;