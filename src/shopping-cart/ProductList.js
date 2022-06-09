import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";

class ProductList extends Component {
  renderListProduct = () => {
    //?. ta hỏi productList có tồn tại không
    //nếu nó !== undefine thì ta map
    return this.props.productList?.map((item) => {
      return <Product key={item.maSP} product={item} />;
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
    //key (tự đặt tên) nó sẽ là 1 prop của component gọi hàm mapStateToProps
    //value lấy từ rootReducer(state).shoppingCartReducer(child reducer).property
    productList: state.shoppingCartReducer.productList,
  };
};

//export component ở đây để connect với store
export default connect(mapStateToProps, null)(ProductList);
