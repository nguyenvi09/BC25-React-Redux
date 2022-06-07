const initalState = {
  taiXiu: true,
  mangXucXac: [
    { giaTri: 1, hinhAnh: "img/1.png" },
    { giaTri: 1, hinhAnh: "img/2.png" },
    { giaTri: 1, hinhAnh: "img/3.png" },
  ],
  soBanThang: 0,
  soBanChoi: 0,
};

const xxReducer = (state = initalState, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.taiXiu = action.payload;
      return { ...state };
    }
    case "PLAY_GAME": {
      //B1: xử lý tạo giá trị ngẫu nhiên 3 cục xúc xắc
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // mỗi lần lặp sẽ random ra số ngẫu nhiên 1->6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `img/${soNgauNhien}.png`,
        };
        // push vào mangXucXacNgauNhien -> sau 3 lần lặp thì ta có 3 cục ngẫu nhiên
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }

      state.mangXucXac = mangXucXacNgauNhien;
      //B2: tăng số bàn chơi
      state.soBanChoi += 1;
      //B3: tính thắng && tăng bàn thắng
      let tongSoDiem = state.mangXucXac.reduce((tongDiem, xucXac) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      // xét điều kiện thắng game
      if (
        (tongSoDiem > 11 && !state.taiXiu) ||
        (tongSoDiem <= 11 && state.taiXiu)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default xxReducer;
