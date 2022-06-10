import React, { Component } from "react";
import NguoiChoi from "./NguoiChoi";
import MayTinh from "./MayTinh";
import ThongTin from "./ThongTin";
import { connect } from "react-redux";
import { actOanTuTi, actRandom } from "./../redux/actions/oan-tu-ti";

class OanTuTiRedux extends Component {
  render() {
    return (
      <div className="game-ott">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-3 text-left align-self-end text-center">
              <NguoiChoi />
            </div>
            <div className="col-sm-6 text-center">
              <ThongTin />
              <button
                className="btn btn-success mt-3"
                style={{ fontSize: "22px" }}
                onClick={this.props.playGame}
              >
                Play game
              </button>
            </div>
            <div className="col-sm-3 text-right align-self-end text-center">
              <MayTinh />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// gửi action lên store
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch(actRandom());
        count++;
        if (count >= 10) {
          //gọi hàm để dừng setInterval() lại
          clearInterval(randomComputerItem);

          dispatch(actOanTuTi());
        }
      }, 100);
      // dispatch(actOanTuTi());
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuTiRedux);
