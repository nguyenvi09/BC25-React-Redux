import { DETAIL_PRODUCT } from "../../constants/shopping";

export const actDetailProduct = (product) => {
  return {
    type: DETAIL_PRODUCT,
    payload: product,
  };
};
