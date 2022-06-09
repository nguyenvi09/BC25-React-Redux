import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    const { product, getDetail, getProductAddCart } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img
            style={{ width: "70%" }}
            className="card-img-top align-self-center"
            src={product.hinhAnh}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => {
                getDetail(product);
              }}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                getProductAddCart(product);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (product) => {
      let action = {
        type: "GET_DETAIL",
        payload: product,
      };

      dispatch(action);
    },

    getProductAddCart: (product) => {
      let action = {
        type: "SAVE_PRODUCT",
        payload: product,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Product);
