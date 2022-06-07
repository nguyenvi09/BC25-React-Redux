import React, { Component } from "react";
import { connect } from "react-redux";
class XucXacList extends Component {
  renderXucXac = () => {
    //lấy props từ reducer về
    return this.props.xucXacList.map((item, index) => {
      return (
        <img
          key={index}
          style={{ width: 60 }}
          src={item.hinhAnh}
          alt="Hình Xúc Xắc"
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

//hàm lấy state từ redux về thành props của component
const mapStateToProps = (state) => {
  //key tự đặt tên
  //value: state.xxReducer(nằm trong rootReducer)
  return { xucXacList: state.xxReducer.mangXucXac };
};

export default connect(mapStateToProps, null)(XucXacList);
