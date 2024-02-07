"use client";

import React from "react";
import Task from "./Task";
import useStore from "@/store/store";

const TaskList = () => {
  const { tasks } = useStore((state) => state);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="space-y-2">
      <div>Total Tasks: {tasks.length}</div>
      <div>Completed Tasks: {completedTasks.length}</div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
