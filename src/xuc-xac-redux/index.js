import React, { Component } from "react";
import "./styles.css";
import XucXacList from "./XucXacList";
import ThongTin from "./ThongTin";
import { connect } from "react-redux";
class XucXacRedux extends Component {
  render() {
    return (
      <div className="app-game">
        <div className="container text-center mt-5">
          <h1 className="display-3 mb-5">GAME ĐỔ XÚC XẮC</h1>
          <div className="row">
            <div className="col-4">
              <button
                onClick={() => {
                  this.props.datCuoc(true);
                }}
                className="btn btn-primary btn-tx"
              >
                TÀI
              </button>
            </div>
            <div className="col-4">
              <XucXacList />
            </div>
            <div className="col-4">
              <button
                onClick={() => {
                  this.props.datCuoc(false);
                }}
                className="btn btn-primary btn-tx"
              >
                XỈU
              </button>
            </div>
          </div>
          <ThongTin />
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

//hàm truyền true|false lên store để render lại giá trị bạn chọn
// hàm mapDispatchToProps để đưa 1 action lên store
// ta return method datCuoc() -> khi component connect with redux ->
// từ đó ta có thể gắn method này vào trong component
// mỗi lần onClick vào sẽ gọi hàm datCuoc -> sẽ tạo 1 action={}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      //tạo action
      let action = {
        //type: nó tên để ta nhân biết nó là hoạt động gì mà xử lý
        type: "DAT_CUOC",
        //payload sẽ lưu giá trị
        payload: taiXiu,
      };
      //Gửi action lên Reducer
      dispatch(action);
    },
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(XucXacRedux);
