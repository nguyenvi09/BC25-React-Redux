import React, { Component } from "react";
import { connect } from "react-redux";

class OanTuTiRedux extends Component {
  render() {
    return (
      <div className="game-ott">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-3 text-left align-self-end text-center">
              <div className="speech-bubble">
                <img
                  className="speech-bubble__img"
                  src={this.props.xucXac.hinhAnh}
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
            </div>
            <div className="col-sm-6 text-center">
              <h1
                style={{
                  color: "yellow",
                  fontSize: "55px",
                  marginBottom: "55px",
                }}
                className="text-center"
              >
                I'm iron man, i love you 3000 !!
              </h1>
              <div style={{ color: "blue", fontSize: "35px" }}>
                Số bàn thắng: 0
              </div>
              <div style={{ color: "blue", fontSize: "35px" }}>
                Số bàn chơi: 0
              </div>
              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Play game
              </button>
            </div>
            <div className="col-sm-3 text-right align-self-end text-center">
              <div className="speech-bubble">
                <img className="speech-bubble__img" src="./img/keo.png" />
              </div>
              <img
                style={{ width: "70%", marginBottom: "30px" }}
                src="./img/playerComputer.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//kéo dữ liệu về
const mapStateToProps = (state) => {
  console.log(state);
  return {
    xucXac: state.oanTuTiReducer.tmp,
  };
};

// xử lý chọn kéo|búa|bao
const mapDispatchToProps = (dispatch) => {
  return {
    chonKeoBuaBao: (value) => {
      let action = {
        type: "CHON_KBB",
        payload: value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OanTuTiRedux);
