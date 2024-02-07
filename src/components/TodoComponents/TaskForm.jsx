"use client";

import useStore from "@/store/store";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
        className="border-gray-300 border-solid border p-2 mr-2"
      />

      <div className="inline-block relative mr-2">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded px-10 py-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option disabled selected>
            Select Priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <div className=" absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
          <FaChevronDown />
        </div>
      </div>

      <button
        type="submit"
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
