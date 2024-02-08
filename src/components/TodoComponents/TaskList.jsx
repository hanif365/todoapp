"use client";

import React from "react";
import Task from "./Task";
import useStore from "@/store/store";

const TaskList = () => {
  const { tasks } = useStore((state) => state);

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.priority === b.priority) {
      return 0;
    } else if (a.priority === "high") {
      return -1;
    } else if (a.priority === "medium" && b.priority === "low") {
      return -1;
    } else {
      return 1;
    }
  });

  const completedTasks = sortedTasks.filter((task) => task.completed);

  return (
    <div className="">
      <div className="space-y-1">
        {sortedTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>

      {sortedTasks.length ? (
        <div className="flex text-gray-500 pt-5">
          <p className="text-sm md:text-base">
            Total {sortedTasks.length === 1 ? "Task" : "Tasks"}:{" "}
            <span className="">{sortedTasks.length}</span>
          </p>
          <p className="text-sm md:text-base pl-4 md:pl-5">
            Completed {completedTasks.length === 1 ? "Task" : "Tasks"}:{" "}
            <span className="">{completedTasks.length}</span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskList;
