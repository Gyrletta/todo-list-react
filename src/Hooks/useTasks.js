import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [hideDone, setHideDone] = useState(false);

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
