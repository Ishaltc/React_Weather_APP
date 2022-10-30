import { combineReducers } from "redux";
import { countReducer } from "./count";
import { placeReducer } from "./placeReducer";

const rootReducer = combineReducers({
    place:placeReducer,
    count:countReducer
})
export default rootReducer