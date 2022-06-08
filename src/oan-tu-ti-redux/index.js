import React, { Component } from "react";
import NguoiChoi from "./NguoiChoi";
import MayTinh from "./MayTinh";
import ThongTin from "./ThongTin";
import { connect } from "react-redux";

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
                className="btn btn-success"
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

// xử lý chọn kéo|búa|bao
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let action = {
        type: "OAN_TU_TI",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuTiRedux);
