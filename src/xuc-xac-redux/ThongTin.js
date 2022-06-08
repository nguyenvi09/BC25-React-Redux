import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTin extends Component {
  render() {
    const { taiXiu, soBanChoi, soBanThang, soBanThua } = this.props;
    return (
      <div style={{ fontSize: "50px" }}>
        <div>
          BẠN CHỌN:{" "}
          <span style={{ color: "red" }}>{taiXiu ? "TÀI" : "XỈU"}</span>
        </div>
        <div className="row justify-content-around">
          <div className="col-6 align-self-start">
            THẮNG: <span style={{ color: "green" }}>{soBanThang}</span>
          </div>
          <div className="col-6">
            THUA: <span style={{ color: "red" }}>{soBanThua}</span>
          </div>
        </div>
        <div>
          TỔNG SỐ BÀN CHƠI: <span style={{ color: "yellow" }}>{soBanChoi}</span>
        </div>
      </div>
    );
  }
}

//tạo hàm lấy dự liệu từ store về
const mapStateToProps = (state) => {
  return {
    //key: tự đặt tên, nó sẽ là prop khi đã lấy về
    //value: gọi tới store để lấy
    //tham số state(tự đặt tên) sẽ được truyền vào đối số là Object trong rootReducer
    //xxReducer nằm trong rootReducer
    taiXiu: state.xxReducer.taiXiu,
    soBanThang: state.xxReducer.soBanThang,
    soBanThua: state.xxReducer.soBanThua,
    soBanChoi: state.xxReducer.soBanChoi,
  };
};

export default connect(mapStateToProps, null)(ThongTin);
