import {
  DANG_KY,
  XOA,
  SUA,
  CAP_NHAT,
} from "../../constants/quan-ly-nguoi-dung";

export const actDangKy = (value) => {
  return { type: DANG_KY, value };
};

export const actXoa = (value) => {
  return { type: XOA, value };
};

export const actSua = (nd) => {
  return { type: SUA, nd };
};

export const actCapNhat = (value) => {
  return { type: CAP_NHAT, value };
};
