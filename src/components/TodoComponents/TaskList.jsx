"use client";

import React from "react";
import Task from "./Task";
import useStore from "@/store/store";

const TaskList = () => {
  const { tasks } = useStore((state) => state);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="">
      <div className="space-y-1">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>

      <div className="flex text-gray-500 pt-5">
        <p>
          Total Tasks: <span className="">{tasks.length}</span>
        </p>
        <p className="pl-5">
          Completed Tasks: <span className="">{completedTasks.length}</span>
        </p>
      </div>
    </div>
  );
};

export default TaskList;
