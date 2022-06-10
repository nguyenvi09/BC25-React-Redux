import React, { Component } from "react";
import { connect } from "react-redux";
import { actChonKBB } from "./../redux/actions/oan-tu-ti";

class NguoiChoi extends Component {
  render() {
    const { xucXacNguoiChoi, mangKeoBuaBao, chonKeoBuaBao } = this.props;
    return (
      <>
        <div className="speech-bubble">
          <img
            className="speech-bubble__img"
            src={xucXacNguoiChoi.hinhAnh}
            alt="Hình ảnh chọn Kéo/Búa/Bao"
          />
        </div>

        <img
          style={{ width: "70%" }}
          src="./img/player.png"
          alt="./img/player.png"
        />

        <div className="d-flex justify-content-between">
          {mangKeoBuaBao.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  chonKeoBuaBao(index + 1);
                }}
                style={{ width: "30%" }}
                className="btn btn-light btn-outline-warning p-0"
              >
                <img
                  style={{ width: "50%" }}
                  src={item.hinhAnh}
                  alt={item.hinhAnh}
                />
              </button>
            );
          })}
        </div>
      </>
    );
  }
}

//lấy hình ảnh mặc định hiển bị trong bong bóng hội thoại
const mapStateToProps = (state) => {
  return {
    mangKeoBuaBao: state.oanTuTiReducer.mangKeoBuaBao,
    xucXacNguoiChoi: state.oanTuTiReducer.tmpNguoiChoi,
  };
};

// gửi action lên store chọn K/B/B
const mapDispatchToProps = (dispatch) => {
  return {
    chonKeoBuaBao: (ma) => {
      dispatch(actChonKBB(ma));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NguoiChoi);
