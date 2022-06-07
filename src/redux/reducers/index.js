import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import shoppingReducer from "./shopping/shoppingReducer";
import xxReducer from "./xuc-xac/xxReducer";
const rootReducer = combineReducers({
  //key: value của child reducer
  //key do mình tự đặt tên
  userReducer,
  shoppingReducer,
  xxReducer,
});

export default rootReducer;
