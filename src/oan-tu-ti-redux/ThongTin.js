import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTin extends Component {
  render() {
    const { soBanThang, soBanThua, soBanHoa, soBanChoi } = this.props;
    return (
      <>
        <h1 className=" display-4 text-warning text-center mb-5 mt-4">
          I'm iron man, <br /> i love you 3000 !!
        </h1>
        <div className="row">
          <div className="col-4" style={{ color: "blue", fontSize: "35px" }}>
            Thắng: <span style={{ color: "#19b500" }}>{soBanThang}</span>
          </div>
          <div className="col-4" style={{ color: "blue", fontSize: "35px" }}>
            Hòa: <span style={{ color: "#bdb3b3" }}>{soBanHoa}</span>
          </div>
          <div className="col-4" style={{ color: "blue", fontSize: "35px" }}>
            Thua: <span style={{ color: "red" }}>{soBanThua}</span>
          </div>
        </div>

        <div style={{ color: "blue", fontSize: "35px" }}>
          Số bàn chơi: <span style={{ color: "yellow" }}>{soBanChoi}</span>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.oanTuTiReducer.soBanThang,
    soBanHoa: state.oanTuTiReducer.soBanHoa,
    soBanThua: state.oanTuTiReducer.soBanThua,
    soBanChoi: state.oanTuTiReducer.soBanChoi,
  };
};

export default connect(mapStateToProps, null)(ThongTin);
