"use client";

import React from "react";
import Task from "./Task";
import useStore from "@/store/store";

const TaskList = () => {
  const { tasks } = useStore((state) => state);
  const completedTasks = tasks.filter((task) => task.completed);
  console.log(tasks);

  return (
    <div className="">
      <div className="space-y-1">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>

      {tasks.length ? (
        <div className="flex text-gray-500 pt-5">
          <p className="text-sm md:text-base">
            Total {tasks.length === 1 ? "Task" : "Tasks"}:{" "}
            <span className="">{tasks.length}</span>
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
