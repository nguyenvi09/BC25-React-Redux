import { DANG_KY, XOA } from "../../constants/quan-ly-nguoi-dung";

const initState = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      hoTen: "Nguyễn Văn A",
      matKhau: "123",
      email: "nguyenvana@gmail.com",
      soDienThoai: "09090909",
      loaiNguoiDung: "NguoiDung",
    },
    {
      taiKhoan: "nguyenvanb",
      hoTen: "Nguyễn Văn B",
      matKhau: "123",
      email: "nguyenvanb@gmail.com",
      soDienThoai: "080808",
      loaiNguoiDung: "QuanTri",
    },
  ],
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case DANG_KY: {
      //clone mangNguoiDung & push nd mới vào
      state.mangNguoiDung = [...state.mangNguoiDung, action.value];
      return { ...state };
    }
    case XOA: {
      let mangNguoiDungMoi = [...state.mangNguoiDung];
      let index = mangNguoiDungMoi.findIndex(
        (nd) => nd.taiKhoan === action.value.taiKhoan
      );
      if (index !== -1) {
        mangNguoiDungMoi.splice(index, 1);
      }
      state.mangNguoiDung = mangNguoiDungMoi;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default formReducer;
