import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "./data.json";
import { connect } from "react-redux";

class ShoppingCartRedux extends Component {
  render() {
    const { detailProduct, cartProduct } = this.props;
    return (
      <div className="container">
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({cartProduct})
          </button>
        </div>
        <ProductList />
        <Modal />
        <div className="row">
          <div className="col-sm-5 text-center">
            <img
              style={{ width: "80%" }}
              className="img-fluid"
              src={detailProduct.hinhAnh}
              alt=""
            />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailProduct: state.shoppingCartReducer.detailProduct,
    cartProduct: state.shoppingCartReducer.cartProduct,
  };
};

export default connect(mapStateToProps, null)(ShoppingCartRedux);
