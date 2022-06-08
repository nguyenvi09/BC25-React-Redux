// import { CHON_KBB, OAN_TU_TI } from "../../constants/oan-tu-ti";
import * as ActionType from "../../constants/oan-tu-ti";

const actChonKBB = (ma) => {
  return {
    type: ActionType.CHON_KBB,
    payload: ma,
  };
};

const actOanTuTi = () => {
  return {
    type: ActionType.OAN_TU_TI,
  };
};

export { actChonKBB, actOanTuTi };
