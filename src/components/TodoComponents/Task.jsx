"use client";

import useStore from "@/store/store";
import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ImCross } from "react-icons/im";

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
              className="w-4 h-4 md:w-6 md:h-6"
            />
          </td>
          {editing ? (
            <>
              <td className="p-2 w-full md:w-auto">
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="p-2 w-full"
                />
              </td>
              <td className="p-2 w-full md:w-auto">
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

              <td className="p-2 w-full md:w-auto">
                <div className="flex space-x-2">
                  <FaSave
                    onClick={handleSave}
                    className="w-4 h-4 md:w-5 md:h-5 text-green-500 rounded cursor-pointer"
                  />

                  <ImCross
                    onClick={handleCancel}
                    className="w-4 h-4 md:w-5 md:h-5 text-red-500 rounded cursor-pointer"
                  />
                </div>
              </td>
            </>
          ) : (
            <>
              <td className={`${task.completed ? "line-through" : ""}`}>
                {task.text}
              </td>
            </>
          )}

          <td className="px-4 py-2 flex justify-end" colSpan="2">
            {!editing && (
              <FaEdit
                onClick={handleEdit}
                className="px-2 py-1 w-8 h-8 md:w-10 md:h-10 text-gray-500 rounded cursor-pointer"
              />
            )}
            <MdDelete
              onClick={handleDelete}
              className="pl-2 py-1 w-8 h-8 md:w-10 md:h-10 text-red-600 rounded cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Task;
