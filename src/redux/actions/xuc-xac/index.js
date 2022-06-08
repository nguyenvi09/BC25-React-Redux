import * as ActionType from "./../../constants/xuc-xac.js";

const actDatCuoc = (taiXiu) => {
  return {
    type: ActionType.DAT_CUOC,
    payload: taiXiu,
  };
};

const actPlayGame = () => {
  return {
    type: ActionType.PLAY_GAME,
  };
};

export { actDatCuoc, actPlayGame };
