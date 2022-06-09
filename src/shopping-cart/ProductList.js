import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";

class ProductList extends Component {
  renderListProduct = () => {
    return this.props.productList.map((item) => {
      return (
        <Product
          key={item.maSP}
          product={item}
          getDetail={this.props.getDetail}
          getProductAddCart={this.props.getProductAddCart}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.shoppingCartReducer.productList,
  };
};

export default connect(mapStateToProps, null)(ProductList);
