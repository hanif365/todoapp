import { produce } from "immer";

const todoSlice = (set) => ({
  tasks: [],
  addTask: (task) =>
    set(
      produce((state) => {
        state.tasks.push(task);
      }),
      false,
      "todoSlice/addTask"
    ),
  editTask: (id, updatedTask) =>
    set(
      produce((state) => {
        const taskIndex = state.tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
          state.tasks[taskIndex] = updatedTask;
        }
      }),
      false,
      "todoSlice/editTask"
    ),
  toggleTask: (id) =>
    set(
      produce((state) => {
        const taskIndex = state.tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
          state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
        }
      }),
      false,
      "todoSlice/toggleTask"
    ),
  deleteTask: (id) =>
    set(
      produce((state) => {
        state.tasks = state.tasks.filter((task) => task.id !== id);
      }),
      false,
      "todoSlice/deleteTask"
    ),
});

export default todoSlice;
