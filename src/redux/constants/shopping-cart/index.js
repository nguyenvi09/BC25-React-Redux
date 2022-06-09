// lưu các hằng số của action.type
// "@us/DELE_US" em prefix @us/ đằng trước để tránh trùng
// thay vì import từng biến thì ta dùng cú pháp
// import *(tất cả) as ActionType(tên tự đặt) from
// lúc này ActionType {DELE, EDIT, ....} là 1 object chứa thuộc tính
//là  các constant
const DELETE_USER = "@us/DELE_US";
