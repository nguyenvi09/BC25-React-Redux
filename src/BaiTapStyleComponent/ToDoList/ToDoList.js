import React, { Component } from "react";
import { Container } from "../../Components/Container";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../../Themes/ToDoList/DarkTheme";
import { LightTheme } from "../../Themes/ToDoList/LightTheme";
import { PrimaryTheme } from "../../Themes/ToDoList/PrimaryTheme";
import { Dropdown } from "../../Components/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../Components/Heading";
import { TextField } from "../../Components/TextField";
import { Button } from "../../Components/Button";
import { Table, Tr, Td, Th, Thead, Tbody } from "../../Components/Table";
import { connect } from "react-redux";
import {
  addTask,
  changeTheme,
  deleteTask,
  doneTask,
  editTask,
  updateTask,
} from "../../redux/actions/todolist";
import { arrTheme } from "../../Themes/ThemeManager";
class ToDoList extends Component {
  state = {
    taskName: "",
    disabled: true,
  };

  renderTaskToDo = () => {
    // lọc ra những task false đại diện chưa làm xong để render
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  //do setState này bất đồng bộ nên ta phải cho nó respone trước rồi mới dispatch
                  this.setState(
                    {
                      disabled: false,
                    },
                    () => {
                      this.props.dispatch(editTask(task));
                    }
                  );
                }}
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(doneTask(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTask(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskDone = () => {
    // lọc ra những task true đại diện làm xong để render
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTask(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  // hàm render theme import ThemeManager
  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option key={index} value={theme.id}>
          {theme.name}
        </option>
      );
    });
  };

  render() {
    return (
      <>
        {/* truyền nó thuộc tính theme */}
        <ThemeProvider theme={this.props.themeToDoList}>
          {/* Container giống như thẻ div nhưng được custom css rồi */}
          <Container className="w-50">
            <Dropdown
              onChange={(event) => {
                let { value } = event.target;
                //dispatch value lên reducer
                this.props.dispatch(changeTheme(value));
              }}
            >
              {this.renderTheme()}
            </Dropdown>
            <Heading3>To do list</Heading3>
            <TextField
              value={this.state.taskName}
              name="taskName"
              label="task name"
              className="w-50"
              // vì ở đây ta xử lý 1 trường taskName nên ta không cần thiết tách ra hàm riêng
              onChange={(e) => {
                this.setState({
                  taskName: e.target.value,
                });
              }}
            />
            <Button
              onClick={() => {
                //lấy thông tin người dùng nhập từ input
                let { taskName } = this.state;
                //Tạo ra 1 task object
                let newTask = {
                  id: Date.now(),
                  taskName: taskName,
                  done: false,
                };
                //Đưa task object lên redux thông qua dispatch()
                this.props.dispatch(addTask(newTask));
              }}
              className="ml-2"
            >
              <i className="fa fa-plus"></i>
              Add task
            </Button>
            {this.state.disabled ? (
              <Button
                disabled
                onClick={() => {
                  this.props.dispatch(updateTask(this.state.taskName));
                }}
                className="ml-2"
              >
                <i className="fa fa-upload"></i>
                Update task
              </Button>
            ) : (
              <Button
                onClick={() => {
                  let { taskName } = this.state;
                  this.setState(
                    {
                      disabled: false,
                    },
                    () => {
                      this.props.dispatch(updateTask(taskName));
                    }
                  );
                }}
                className="ml-2"
              >
                <i className="fa fa-upload"></i>
                Update task
              </Button>
            )}
            <hr />
            <Heading3>Tast to do</Heading3>
            <Table>
              <Thead>{this.renderTaskToDo()}</Thead>
            </Table>
            <Heading3>Task completed</Heading3>
            <Table>
              <Thead>{this.renderTaskDone()}</Thead>
            </Table>
          </Container>
        </ThemeProvider>
      </>
    );
  }

  //Đây là lifecycle trả về props cũ và state cũ của component trước khi render
  //(lifecycle này chạy sau render)
  componentDidUpdate(prevProps, prevState) {
    //so sánh nếu như props trước đó (taskEdit trước mà khác tastEdit hiện tại
    // thì mình mới setState)
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.todolistReducer.themeToDoList,
    taskList: state.todolistReducer.taskList,
    taskEdit: state.todolistReducer.taskEdit,
  };
};

export default connect(mapStateToProps, null)(ToDoList);
