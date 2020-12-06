/* istanbul ignore file */

import { combineReducers } from "redux";

import auth from "./auth/authReducer";
import event from "./event/eventReducer";


// Combine reducer into single one
const rootReducer = combineReducers({
  auth,
  event,
});

export default rootReducer;
