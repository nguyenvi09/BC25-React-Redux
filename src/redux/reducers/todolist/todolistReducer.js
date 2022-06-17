import { DarkTheme } from "../../../Themes/ToDoList/DarkTheme";
import {
  ADD_TASK,
  CHANGE_THEME,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from "../../constants/todolist";
import { arrTheme } from "../../../Themes/ThemeManager";

const initialState = {
  //ta cho DarkTheme là dữ liệu mặc định
  themeToDoList: DarkTheme,
  //tạo dữ liệu mẫu cho taskList, demo id kiểu string
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
  taskEdit: { id: -1, taskName: "", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      //Kiểm tra rỗng
      if (action.newTask.taskName.trim() === "") {
        alert("Vui lòng nhập tên công việc!!");
        return { ...state };
      }
      //Kiểm tra tồn tại
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("Tên công việc đã tồn tại!");
        return { ...state };
      }

      taskListUpdate.push(action.newTask);
      //Xử lý xong thì gán taskList mới vfao2 taskList
      state.taskList = taskListUpdate;

      return { ...state };
    }
    case CHANGE_THEME: {
      //Tìm theme dựa vào action.themeId được chọn
      let theme = arrTheme.find((theme) => theme.id == action.themeId);
      if (theme) {
        //set lại theme cho state.themeToDoList
        state.themeToDoList = { ...theme.theme };
      }

      return { ...state };
    }
    case DONE_TASK: {
      //khi click vào button check => dispatch lên aciton có taskId
      let taskListUpdate = [...state.taskList];
      //từ taskId tìm ra task đó ở vị trí nào trong mảng tiến hành
      // cập nhật lại thuộc tính done = true và cập nhật lại state của redux
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        taskListUpdate[index].done = true;
      }
      //   state.taskList = taskListUpdate;

      return { ...state, taskList: taskListUpdate };
    }
    case DELETE_TASK: {
      //   let taskListUpdate = [...state.taskList];

      // cách 1:  let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      //   if (index !== -1) {
      //     taskListUpdate.splice(index, 1);
      //   }

      // cách 2: gán lại giá trị cho taskListUpdate = chính nó nhưng filter không có taskId đó
      //   taskListUpdate = taskListUpdate.filter(
      //     (task) => task.id !== action.taskId
      //   );

      //   return { ...state, taskList: taskListUpdate };
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.taskId),
      };
    }

    case EDIT_TASK: {
      return { ...state, taskEdit: action.task };
    }
    case UPDATE_TASK: {
      //chỉnh sửa lại taskName của taskEdit
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName };

      //Tìm trong taskList cập nhật lại taskEdit người dùng update
      let taskListUpdate = [...state.taskList];

      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );

      if (index !== -1) {
        taskListUpdate[index] = state.taskEdit;
      }

      state.taskList = taskListUpdate;
      state.taskEdit = { id: "-1", taskName: "", done: false };
      return { ...state };
    }

    default:
      return { ...state };
  }
};
