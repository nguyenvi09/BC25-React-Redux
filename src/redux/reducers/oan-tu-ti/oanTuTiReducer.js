// xác định dữ liệu tạo state
const initialState = {
  tmpNguoiChoi: { ma: 1, hinhAnh: "img/keo.png" },
  tmpMay: { ma: 2, hinhAnh: "img/bua.png" },
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
        state.tmpNguoiChoi = state.mangKeoBuaBao[0];
      } else if (action.payload === 2) {
        state.tmpNguoiChoi = state.mangKeoBuaBao[1];
      } else {
        state.tmpNguoiChoi = state.mangKeoBuaBao[2];
      }
      return { ...state };
    }
    case "OAN_TU_TI": {
      //b1: máy sẽ chọn ngẫu nhiên kéo|búa|bao
      let soNgauNhien = Math.floor(Math.random() * 3) + 1;
      if (soNgauNhien === 1) {
        state.tmpMay = state.mangKeoBuaBao[0];
      } else if (soNgauNhien === 2) {
        state.tmpMay = state.mangKeoBuaBao[1];
      } else {
        state.tmpMay = state.mangKeoBuaBao[2];
      }
      //B2: đấu coi ai thắng
      if (
        (state.tmpNguoiChoi.ma === 1 && state.tmpMay.ma === 3) ||
        (state.tmpNguoiChoi.ma === 2 && state.tmpMay.ma === 1) ||
        (state.tmpNguoiChoi.ma === 3 && state.tmpMay.ma === 2)
      ) {
        state.soBanThang += 1;
      }
      //B3: tăng số bàn chơi
      state.soBanChoi += 1;
    }
    default:
      return { ...state };
  }
};

export default oanTuTiReducer;
