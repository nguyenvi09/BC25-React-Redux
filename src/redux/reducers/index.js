import { combineReducers } from "redux";
import xxReducer from "./xuc-xac/xxReducer";
import oanTuTiReducer from "./oan-tu-ti/oanTuTiReducer";
import shoppingCartReducer from "./shopping-cart/shoppingCartReducer";
import formReducer from "./quan-ly-nguoi-dung/formReducer";
import todolistReducer from "./todolist/todolistReducer";
const rootReducer = combineReducers({
  //key: value của child reducer
  //key do mình tự đặt tên
  xxReducer,
  oanTuTiReducer,
  shoppingCartReducer,
  formReducer,
  todolistReducer,
});

export default rootReducer;
