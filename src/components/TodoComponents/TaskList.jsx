"use client";

import React, { useState, useEffect } from "react";
import Task from "./Task";
import useStore from "@/store/store";
import { ScaleLoader } from "react-spinners";

const TaskList = () => {
  const { tasks } = useStore((state) => state);
  const [showNoTaskMessage, setShowNoTaskMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (tasks.length === 0) {
        setShowNoTaskMessage(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [tasks]);

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
    <div>
      {!tasks.length && !showNoTaskMessage ? (
        <div className="flex justify-center">
          <ScaleLoader color="#78C800" loading={true} width={6} margin={4} />
        </div>
      ) : (
        <>
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
        </>
      )}

      {showNoTaskMessage && !tasks.length && (
        <div className="text-center text-red-500 mt-4">No task Found!</div>
      )}
    </div>
  );
};

export default TaskList;
