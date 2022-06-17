import {
  ADD_TASK,
  CHANGE_THEME,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from "../../constants/todolist";
// { return {}} <=> ({});
export const addTask = (newTask) => ({
  type: ADD_TASK,
  newTask,
});

export const changeTheme = (themeId) => ({
  type: CHANGE_THEME,
  themeId,
});

export const doneTask = (taskId) => ({
  type: DONE_TASK,
  taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  task,
});

export const updateTask = (taskName) => ({
  type: UPDATE_TASK,
  taskName,
});
