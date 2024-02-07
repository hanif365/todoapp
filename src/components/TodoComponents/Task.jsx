"use client";

import useStore from "@/store/store";
import React, { useState } from "react";

const Task = ({ task }) => {
  const { toggleTask, deleteTask, editTask } = useStore((state) => state);
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (!editedText.trim()) return;
    editTask(task.id, { ...task, text: editedText, priority: editedPriority });
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedText(task.text);
    setEditedPriority(task.priority);
    setEditing(false);
  };

  return (
    <table className="table-auto w-full">
      <tbody
        className={`${
          task.priority === "high"
            ? "bg-red-300"
            : task.priority === "medium"
            ? "bg-yellow-100"
            : "bg-green-100"
        }`}
      >
        <tr className="">
          <td className="py-2 pl-2 w-12">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggle}
              className="w-6 h-6"
            />
          </td>
          {editing ? (
            <>
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="p-2 w-full"
                />
              </td>
              <td className="px-4 py-2">
                <select
                  value={editedPriority}
                  onChange={(e) => setEditedPriority(e.target.value)}
                  className="p-2 w-full"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Cancel
                </button>
              </td>
            </>
          ) : (
            <>
              <td
                className={`${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.text}
              </td>
            </>
          )}

          <td
            className="px-4 py-2 text-right"
            colSpan="2"
          >
            {!editing && (
              <button
                onClick={handleEdit}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
            )}

            <button
              onClick={handleDelete}
              className="bg-red-500 text-white ml-2 px-2 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Task;
