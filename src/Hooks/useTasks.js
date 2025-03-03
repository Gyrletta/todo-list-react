import React from "react";
import { useState, useEffect } from "react";

const getInitialTasks = () => {
  const tasksLocalStorage = localStorage.getItem("tasks");
  return tasksLocalStorage ? JSON.parse(tasksLocalStorage) : [];
};

const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);
  const [hideDone, setHideDone] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => setHideDone((prev) => !prev);

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const markAllAsDone = () => {
    setTasks((prevTasks) => prevTasks.map((task) => ({ ...task, done: true })));
  };

  const addNewTask = (content) => {
    if (!content.trim()) return;
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        content,
        done: false,
        id: prevTasks.length ? prevTasks[prevTasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    markAllAsDone,
    addNewTask,
  };
};

export default useTasks;
