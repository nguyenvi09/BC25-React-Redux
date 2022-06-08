import React, { Component } from "react";
import { connect } from "react-redux";

class NguoiChoi extends Component {
  render() {
    return (
      <>
        <div className="speech-bubble">
          <img
            className="speech-bubble__img"
            src={this.props.xucXacNguoiChoi.hinhAnh}
          />
        </div>

        <img style={{ width: "70%" }} src="./img/player.png" />

        <div className="d-flex justify-content-between">
          <button
            onClick={() => {
              this.props.chonKeoBuaBao(1);
            }}
            style={{ width: "30%" }}
            className="btn btn-light p-0"
          >
            <img style={{ width: "50%" }} src="./img/keo.png" />
          </button>
          <button
            onClick={() => {
              this.props.chonKeoBuaBao(2);
            }}
            style={{ width: "30%" }}
            className="btn btn-light p-0"
          >
            <img style={{ width: "50%" }} src="./img/bua.png" />
          </button>
          <button
            onClick={() => {
              this.props.chonKeoBuaBao(3);
            }}
            style={{ width: "30%" }}
            className="btn btn-light p-0"
          >
            <img style={{ width: "50%" }} src="./img/bao.png" />
          </button>
        </div>
      </>
    );
  }
}

//lấy hình ảnh mặc định hiển bị trong bong bóng hội thoại
const mapStateToProps = (state) => {
  return {
    xucXacNguoiChoi: state.oanTuTiReducer.tmpNguoiChoi,
  };
};

// gửi action lên store chọn K/B/B
const mapDispatchToProps = (dispatch) => {
  return {
    chonKeoBuaBao: (ma) => {
      dispatch({
        type: "CHON_KBB",
        payload: ma,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NguoiChoi);
