import { DarkTheme } from "./ToDoList/DarkTheme";
import { LightTheme } from "./ToDoList/LightTheme";
import { PrimaryTheme } from "./ToDoList/PrimaryTheme";

//file ThemeManager.js sẽ quản lý tất cả theme của ứng dụng
export const arrTheme = [
  {
    id: 1,
    name: "Dark theme",
    theme: DarkTheme,
  },
  {
    id: 2,
    name: "Light theme",
    theme: LightTheme,
  },
  {
    id: 3,
    name: "Primary theme",
    theme: PrimaryTheme,
  },
];
