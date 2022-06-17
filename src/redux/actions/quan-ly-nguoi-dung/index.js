import { DANG_KY, XOA } from "../../constants/quan-ly-nguoi-dung";

export const actDangKy = (value) => {
  return { type: DANG_KY, value };
};

export const actXoa = (value) => {
  return { type: XOA, value };
};
