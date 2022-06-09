import { combineReducers } from "redux";
import xxReducer from "./xuc-xac/xxReducer";
import oanTuTiReducer from "./oan-tu-ti/oanTuTiReducer";
import shoppingCartReducer from "./shopping-cart/shoppingCartReducer";
const rootReducer = combineReducers({
  //key: value của child reducer
  //key do mình tự đặt tên
  xxReducer,
  oanTuTiReducer,
  shoppingCartReducer,
});

export default rootReducer;
