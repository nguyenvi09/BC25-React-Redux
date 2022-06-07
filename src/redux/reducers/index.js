import { combineReducers } from "redux";
import xxReducer from "./xuc-xac/xxReducer";
import oanTuTiReducer from "./oan-tu-ti/oanTuTiReducer";
const rootReducer = combineReducers({
  //key: value của child reducer
  //key do mình tự đặt tên
  xxReducer,
  oanTuTiReducer,
});

export default rootReducer;
