import data from "./data.json";

const initialState = {
  productList: data,
  detailProduct: data[0],
  listCart: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL": {
      state.detailProduct = action.payload;
    }
  }
  return { ...state };
};

export default shoppingCartReducer;
