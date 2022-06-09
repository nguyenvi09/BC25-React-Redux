import data from "./data.json";

//thiết kế state, nhận diện dữ liệu thay đổi giao diện phù hợp
const initialState = {
  productList: data,
  detailProduct: data[0],
  listCart: [],
  cartProduct: 0,
};

//cấu trúc Child Reducer ta tạo cái hàm
const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL": {
      state.detailProduct = action.payload;
    }
    case "SAVE_PRODUCT": {
      const listCart = [...state.listCart];
      const index = listCart.findIndex(
        (product) => product.maSP === action.payload.maSP
      );
      if (index !== -1) {
        listCart[index].soLuong += 1;
      } else {
        const productNew = {
          maSP: action.payload.maSP,
          tenSP: action.payload.tenSP,
          hinhAnh: action.payload.hinhAnh,
          soLuong: 1,
          donGia: action.payload.giaBan,
        };
        listCart.push(productNew);
      }
      state.cartProduct += 1;
      state.listCart = listCart;
      return { ...state };
    }
    case "UP_DOWN": {
      //tìm kiếm có trong mảng hay không
      const listCart = [...state.listCart];
      const index = listCart.findIndex(
        (product) => product.maSP === action.payload.maSP
      );
      if (index !== -1) {
        //cập nhật số lượng
        if (action.status) {
          //tăng
          listCart[index].soLuong += 1;
        } else {
          //giảm
          if (listCart[index].soLuong > 1) {
            listCart[index].soLuong -= 1;
          }
        }
      }
      state.listCart = listCart;
      return { ...state };
    }
    case "DELETE_PRODUCT": {
      const listCart = [...state.listCart];
      const index = listCart.findIndex(
        (product) => product.maSP === action.payload.maSP
      );

      if (index !== -1) {
        listCart.splice(index, 1);
      }
      state.listCart = listCart;
      return { ...state };
    }
  }
  return { ...state };
};

export default shoppingCartReducer;
