import {
  CAP_NHAT,
  DANG_KY,
  SUA,
  XOA,
} from "../../constants/quan-ly-nguoi-dung";

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

  //tổ chức 1 state nguoiDungSua
  nguoiDungSua: {
    taiKhoan: "nguyenvana",
    hoTen: "Nguyễn Văn A",
    matKhau: "123",
    email: "nguyenvana@gmail.com",
    soDienThoai: "09090909",
    loaiNguoiDung: "NguoiDung",
  },
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
    case SUA: {
      state.nguoiDungSua = action.nd;
      return { ...state };
    }
    case CAP_NHAT: {
      //Lấy ra người dùng trong mảng cập nhật = người dùng gửi lên
      let mangNguoiDungUpdate = [...state.mangNguoiDung];

      //Lấy ra người ở trong mangNguoiDung dựa vào thuộc tính tài khoản của dữ liệu người dispatch lên (action.payload => dữ liệu lấy từ form)
      let nguoiDungUpdate = mangNguoiDungUpdate.find(
        (nd) => nd.taiKhoan === action.value.taiKhoan
      );
      //Nếu tim thấy thì lấy tất cả thuộc tính của người dùng trong mảng gán = giá trị người dùng gửi lên (Dùng for in để duyệt thuộc tính)
      if (nguoiDungUpdate) {
        for (let key in nguoiDungUpdate) {
          nguoiDungUpdate[key] = action.value[key];
        }
      }

      //Cập nhật lại state.mangNguoiDung
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default formReducer;
