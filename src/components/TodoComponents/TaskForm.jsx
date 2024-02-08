"use client";

import useStore from "@/store/store";
import React, { useState } from "react";

const TaskForm = () => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState();
  const { addTask } = useStore((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ id: Date.now(), text, completed: false, priority });
    setText("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
        className="border-gray-200 border p-4 outline-none flex-1 rounded"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="rounded px-4 py-2 border border-gray-200 text-gray-400 font-semibold leading-tight outline-none bg-white cursor-pointer w-40 md:w-auto"
      >
        <option disabled defaultValue>
          Select Priority
        </option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button
        type="submit"
        className="bg-yellow-500 text-white font-semibold uppercase px-10 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
