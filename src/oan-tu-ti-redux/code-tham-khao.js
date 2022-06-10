// thiết kế initialState
const initialState = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, i love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/keo.png" },
};

// NguoiChoi component
{
  /* <div class="speech-bubble">
    <img
        className="speech-bubble__img"
        src={mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
        alt={mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
    />
</div> */
}

//render 3 nút kéo búa bao
/**
 * {mangDatCuoc.map((item, index)=>{
 *     xét giá trị đặt cược thêm viền cho item được chọn
 *      let border = {};
 *      if(item.datCuoc){
 *          border = {border: "3px solid orange"};
 *       }
 *      return <div className="col-4"
 *      <button style={border} className="btnItem"
 *          <img src={item.hinhAnh} />
 *       <button/>
 * })}
 */

//định nghĩa keyframes trong hàm render() của Computer component
//truyền cho nó thời gian ${Date.now()} để nó không lặp đi lặp lại hàm này
let keyFrames = `@keyframs randomItem${Date.now()}{
    0% {top: -50px;}
    25% {top: 100px;}
    50% {top: -50px;}
    75% {top: 100px;}
    100% {top: 0px;}
}`;
// chèn dạng internal css keyFrames vừa định nghĩa vào return()
// <style> {keyFrames} </style>
// <img style={{position: "absolute", animation: `randomItem${Date.now()} 0.5s`}, transform:"rotate"} />

/**
 * playGame: () =>{
 *  //ta cho lặp 10 lần trong khoảng thời gian nào đó
 *  let count = 10;
 *  //Khai báo hàm lặp đi lặp lại
 *  let randomComputerItem = setInterval(()=>{
 *      dispatch({
 *          type: "RAN_DOM"
 *      })
 *      count ++;
 *      if(count >= 10){
 *          //gọi hàm để dừng setInterval() lại
 *          clearInterval(randomComputerItem)
 *
 *          dispatch({
 *              type: "END_GAME",
 *          })
 *      }
 *  }, 100)
 * }
 */

/**
 * case "CHON_KEO_BUA_BAO":{
 *  //Reset mảng cược
 *  let mangCuocUpdate = {...state.mangDatCuoc};
 * mangCuocUpdate = mangCuocUpdate.map((item, index)=>{
 *      //cho tất cả datCuoc: flase
 *      return {...item, datCuoc:flase}})
 * }
 *  //Tìm ra maCuoc để thay dổi trang thái đặt cược ứng với mã cược đó
 *  let index = mangCuocUpdate.findIndex(qc => qc.ma === action.maCuoc);
 *  if(index !== -1){
 *      mangCuocUpdate[index].datCuoc = true;
 *  }
 *  state.mangDatCuoc = mangCuocUpdate;
 *
 *  return {...state}
 *
 *
 *
 * case "RAN_DOM": {
 *  let soNgauNhien = Math.floor(Math.random()*3);
 *  let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
 *
 *  state.computer = quanCuocNgauNhien;
 *
 *  return {...state}
 * }
 *
 * case "END_GAME":
 *  //lấy giá trị đặt cược của Player & Computer
 *  let player = state.mangDatCuoc.fing(item => item.datCuoc === true);
 *  let computer = state.computer;
 *
 *  //so sánh
 *  dùng switch & if
 */
