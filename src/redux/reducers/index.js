import { combineReducers } from "redux";
import xxReducer from "./xuc-xac/xxReducer";
const rootReducer = combineReducers({
  //key: value của child reducer
  //key do mình tự đặt tên
  xxReducer,
});

export default rootReducer;
