// xác định dữ liệu tạo state
const initialState = {
  tmp: { ma: 1, hinhAnh: "img/keo.png" },
  mangKeoBuaBao: [
    { ma: 1, hinhAnh: "img/keo.png" },
    { ma: 2, hinhAnh: "img/bua.png" },
    { ma: 3, hinhAnh: "img/bao.png" },
  ],
  soBanThang: 0,
  soBanChoi: 0,
};

//hàm xử lý hành động
const oanTuTiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHON_KBB": {
      if (action.payload === 1) {
        state.tmp = state.mangKeoBuaBao[0];
      } else if (action.payload === 2) {
        state.tmp = state.mangKeoBuaBao[1];
      } else {
        state.tmp = state.mangKeoBuaBao[2];
      }
      console.log(state);
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default oanTuTiReducer;
