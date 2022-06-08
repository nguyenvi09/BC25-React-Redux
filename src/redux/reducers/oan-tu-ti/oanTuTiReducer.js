// xác định dữ liệu tạo state
const initialState = {
  tmpNguoiChoi: { ma: 1, hinhAnh: "img/keo.png" },
  tmpMayTinh: { ma: 2, hinhAnh: "img/bua.png" },
  mangKeoBuaBao: [
    { ma: 1, hinhAnh: "img/keo.png" },
    { ma: 2, hinhAnh: "img/bua.png" },
    { ma: 3, hinhAnh: "img/bao.png" },
  ],
  soBanThang: 0,
  soBanHoa: 0,
  soBanThua: 0,
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
      //B1: tăng số bàn chơi
      state.soBanChoi += 1;

      //b2: máy sẽ chọn ngẫu nhiên kéo|búa|bao
      let soNgauNhien = Math.floor(Math.random() * 3) + 1;
      if (soNgauNhien === 1) {
        state.tmpMayTinh = state.mangKeoBuaBao[0];
      } else if (soNgauNhien === 2) {
        state.tmpMayTinh = state.mangKeoBuaBao[1];
      } else {
        state.tmpMayTinh = state.mangKeoBuaBao[2];
      }

      //B3: đấu
      if (
        (state.tmpNguoiChoi.ma === 1 && state.tmpMayTinh.ma === 3) ||
        (state.tmpNguoiChoi.ma === 2 && state.tmpMayTinh.ma === 1) ||
        (state.tmpNguoiChoi.ma === 3 && state.tmpMayTinh.ma === 2)
      ) {
        state.soBanThang += 1;
      } else if (
        (state.tmpNguoiChoi.ma === 1 && state.tmpMayTinh.ma === 1) ||
        (state.tmpNguoiChoi.ma === 2 && state.tmpMayTinh.ma === 2) ||
        (state.tmpNguoiChoi.ma === 3 && state.tmpMayTinh.ma === 3)
      ) {
        state.soBanHoa += 1;
      } else {
        state.soBanThua += 1;
      }
    }
    default:
      return { ...state };
  }
};

export default oanTuTiReducer;
