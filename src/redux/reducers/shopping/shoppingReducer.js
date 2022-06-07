import data from "./data.json";
import { DETAIL_PRODUCT } from "./../../constants/shopping";

const initialState = {
  productList: data,
  detailProduct: data[0],
  listCart: [],
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_PRODUCT: {
      state.detailProduct = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default shoppingReducer;
