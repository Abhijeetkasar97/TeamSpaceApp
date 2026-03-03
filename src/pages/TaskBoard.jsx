import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design UI", status: "To Do" },
    { id: 2, title: "Develop Login System", status: "In Progress" },
    { id: 3, title: "Test Features", status: "Review" },
    { id: 4, title: "Deploy to Production", status: "Completed" },
  ]);

  const taskCategories = ["To Do", "In Progress", "Review", "Completed"];

  const moveTask = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const Task = ({ task }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "TASK",
      item: { id: task.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    return (
      <div
        ref={drag}
        className={`task p-2 bg-gray-700 text-white rounded cursor-pointer flex justify-between items-center ${isDragging ? "opacity-50" : ""}`}
      >
        <span>{task.title}</span>
        <button onClick={() => deleteTask(task.id)} className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          X
        </button>
      </div>
    );
  };

  const Column = ({ category }) => {
    const [, drop] = useDrop(() => ({
      accept: "TASK",
      drop: (item) => moveTask(item.id, category),
    }));

    return (
      <div ref={drop} className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
        <h3 className="text-xl text-white mb-2">{category}</h3>
        {tasks.filter((task) => task.status === category).map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  };

  const addTask = () => {
  const title = prompt("Enter task title:");
  if (!title) return;

  const newTasks = taskCategories.map((category, index) => ({
    id: Date.now() + index,
    title,
    status: category,
  }));

  setTasks((prevTasks) => [...prevTasks, ...newTasks]);
};

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800 m-6">
        <h2 className="text-4xl font-bold text-center">Task Board</h2>
        <p className="text-center">
          Manage and track your tasks with a Kanban-style workflow.
        </p>
        <button onClick={addTask} className="mb-4 px-4 py-2 bg-orange-500/50 text-white rounded-lg hover:bg-orange-600">
          Add Task
        </button>
        <div className="taskboard-columns grid grid-cols-4 gap-4">
          {taskCategories.map((category) => (
            <Column key={category} category={category} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default TaskBoard;