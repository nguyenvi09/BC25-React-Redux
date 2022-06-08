import React, { Component } from "react";
import { connect } from "react-redux";

class MayTinh extends Component {
  render() {
    return (
      <>
        <div className="speech-bubble">
          <img
            className="speech-bubble__img"
            src={this.props.xucXacMay.hinhAnh}
          />
        </div>
        <img
          style={{ width: "70%", marginBottom: "30px" }}
          src="./img/playerComputer.png"
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
