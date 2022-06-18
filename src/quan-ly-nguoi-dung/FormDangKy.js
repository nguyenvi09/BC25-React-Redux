import React, { Component } from "react";
import { connect } from "react-redux";
import { actDangKy, actCapNhat } from "../redux/actions/quan-ly-nguoi-dung";

//cách validation
/**
 * 1. đưa tất cả các thuộc tính tương ứng với các trường của form vào object value
 * 2.tạo error có những thuộc tính tương tự để bắt lỗi
 * 3. xử lý trong hàm handleChangeInput
 * 4. setState()
 * 5. thêm <p className="text-danger">{this.state.error.taiKhoan}</p>
 * 6.thêm attribute mở rộng data-type={"emailType"} để check email
 * 7. thêm attribute cho password
 */

class FormDangKy extends Component {
  //khai báo 1 state chứa thông tin người dùng
  //đặt key trùng với id trên thẻ input để thấy được thông tin
  state = {
    value: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      loaiNguoiDung: "NguoiDung",
    },
    error: {
      taiKhoan: " ",
      hoTen: " ",
      matKhau: " ",
      email: " ",
      soDienThoai: " ",
    },
  };

  handleChangeInput = (event) => {
    //lấy ra giá trị nhập
    // id là id của thẻ input
    let { value, id } = event.target;
    // lấy giá trị attribute mở rộng
    let type = event.target.getAttribute("data-type");
    let minLength = event.target.getAttribute("data-minlength");
    let maxLength = event.target.getAttribute("data-maxlength");

    // clone value ra ngoài, đưa giá trị this.state.value ra 1 biến
    let newValue = { ...this.state.value };
    //dynamic key: truyền động key
    newValue[id] = value;

    //xử lý cho this.state.error
    let newError = { ...this.state.error };
    let messError = "";
    if (value.trim() === "") {
      messError = id + " không được bỏ trống !";
    } else {
      if (type === "emailType") {
        let regexEmail =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!regexEmail.test(value)) {
          //có dấu ! phủ định
          messError = id + " không đúng định dạng !";
        }
      }
      if (minLength) {
        if (value.length > maxLength || value.length < minLength) {
          messError = `${id} từ ${minLength} - ${maxLength} ký tự !`;
        }
      }
    }

    newError[id] = messError;

    this.setState({
      value: newValue, //object literal - dynamic key
      error: newError,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // hàm chặn sự kiện reload lại trang
    //check error có giá trị hay không
    const { error } = this.state;
    for (let key in error) {
      if (error[key] !== "") {
        return;
      }
    }

    //không rơi vào if -> sẽ không dừng hàm
    // console.log("người dùng mới", this.state.value);

    //gửi thông tin đăng ký mới lên redux
    this.props.dispatch(actDangKy(this.state.value));
  };

  // static getDerivedStateFromProps(newProps, currentState) {
  //   //can thiệp vào quá trình trước khi render và sau khi props mới từ redux trả về
  //   //lấy props mới thay đổi của redux gán vào state tại vị trí này

  //   if (newProps.nguoiDungSua.taiKhoan !== currentState.value.taiKhoan) {
  //     let newState = { ...currentState, value: newProps.nguoiDungSua };
  //     return newState;
  //   }
  //   return null;
  // }

  //Sử dụng lifecycle phiên bản cũ
  //Hàm này tương tự getDerivedStateFromProps: tuy nhiên state thay đổi thì không chạy. Chỉ chạy khi props thay đổi
  componentWillReceiveProps(newProps) {
    //Lifecycle này kích hoạt khi props của component thay đổi và trước khi render
    //Đem props gán vào state => giao diện binding từ state
    this.setState({
      value: newProps.nguoiDungSua,
    });
  }

  render() {
    //lấy ra các trường thông tin gán lên formDangKy để xử lý tính năng chỉnh sửa
    let { taiKhoan, matKhau, email, soDienThoai, hoTen, loaiNguoiDung } =
      this.state.value;
    return (
      //bắt sự kiện tại form thì enter & click submit cũng được
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">
          <h3>Form đăng ký</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Tài khoản</p>
                <input
                  value={taiKhoan}
                  id="taiKhoan"
                  name="taiKhoan"
                  className="form-control"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.error.taiKhoan}</p>
              </div>
              <div className="form-group">
                <p>Họ tên</p>
                <input
                  value={hoTen}
                  id="hoTen"
                  name="hoTen"
                  className="form-control"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.error.hoTen}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  value={email}
                  data-type={"emailType"}
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.error.email}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Mật khẩu</p>
                <input
                  value={matKhau}
                  data-minlength="6"
                  data-maxlength="32"
                  id="matKhau"
                  name="matKhau"
                  className="form-control"
                  type="password"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.error.matKhau}</p>
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  value={soDienThoai}
                  id="soDienThoai"
                  name="soDienThoai"
                  className="form-control"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.error.soDienThoai}</p>
              </div>
              <div className="form-group">
                <p>Loại người dùng</p>
                <select
                  value={loaiNguoiDung}
                  className="form-control"
                  id="loaiNguoiDung"
                  name="loaiNguoiDung"
                  onChange={this.handleChangeInput}
                >
                  {" "}
                  <option value="QuanTri">QuanTri</option>{" "}
                  <option value="NguoiDung">NguoiDung</option>{" "}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-success">
            Đăng ký
          </button>
          <button
            className="btn btn-success ml-2"
            type="button"
            onClick={() => {
              this.props.dispatch(actCapNhat(this.state.value));
            }}
          >
            Cập nhật
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    nguoiDungSua: rootReducer.formReducer.nguoiDungSua,
  };
};

export default connect(mapStateToProps)(FormDangKy);
