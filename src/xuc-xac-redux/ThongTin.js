import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTin extends Component {
  render() {
    const { taiXiu, soBanChoi, soBanThang } = this.props;
    return (
      <div style={{ fontSize: "40px" }}>
        <div>
          BẠN CHỌN:{" "}
          <span style={{ color: "red" }}>{taiXiu ? "TÀI" : "XỈU"}</span>
        </div>
        <div>
          BÀN THẮNG: <span style={{ color: "green" }}>{soBanThang}</span>
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
    soBanChoi: state.xxReducer.soBanChoi,
  };
};

export default connect(mapStateToProps, null)(ThongTin);
