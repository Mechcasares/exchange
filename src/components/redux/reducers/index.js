import { combineReducers } from "redux";
import currencyReducers from "./currencyReducers";

const rootReducer = combineReducers({
  currencyReducers,
});

export default rootReducer;
