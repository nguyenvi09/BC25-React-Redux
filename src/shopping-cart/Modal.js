import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  renderTbody = () => {
    const { listCart, getProductQuantity, getProductDeleteCart } = this.props;
    return listCart.map((product) => {
      return (
        <tr key={product.maSP}>
          <td>{product.maSP}</td>
          <td>{product.tenSP}</td>
          <td>
            <img src={product.hinhAnh} width={50} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                getProductQuantity(false, product);
              }}
            >
              -
            </button>
            {product.soLuong}
            <button
              onClick={() => {
                getProductQuantity(true, product);
              }}
            >
              +
            </button>
          </td>
          <td>{product.donGia}</td>
          <td>{product.donGia * product.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                getProductDeleteCart(product);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderTbody()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listCart: state.shoppingCartReducer.listCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductQuantity: (status, product) => {
      dispatch({
        type: "UP_DOWN",
        payload: product,
        status: status,
      });
    },
    getProductDeleteCart: (product) => {
      dispatch({
        type: "DELETE_PRODUCT",
        payload: product,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
