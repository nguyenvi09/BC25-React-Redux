import React, { Component } from "react";
import { connect } from "react-redux";

class MayTinh extends Component {
  render() {
    let keyFrames = `@keyframs randomItem${Date.now()}{
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0px;}
  }`;
    return (
      <>
        <style> {keyFrames} </style>
        <div className="speech-bubble">
          <img
            className="speech-bubble__img"
            src={this.props.xucXacMay.hinhAnh}
            alt="Hình ảnh ngẫu nhiên Kéo/Búa/Bao"
            style={{
              animation: `randomItem${Date.now()} 0.2s`,
            }}
          />
        </div>
        <img
          style={{ width: "70%", marginBottom: "30px" }}
          src="./img/playerComputer.png"
          alt="./img/playerComputer.png"
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucXacMay: state.oanTuTiReducer.tmpMayTinh,
  };
};

export default connect(mapStateToProps, null)(MayTinh);
