import React from "react";
import {
  TasksList,
  TaskItem,
  TaskContent,
  ToggleDoneButton,
  RemoveButton,
} from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map((task) => (
      <TaskItem
        className={task.done && hideDone ? "tasks__item--hidden" : ""}
        key={task.id}
      >
        <ToggleDoneButton onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </ToggleDoneButton>
        <TaskContent done={task.done}>
          {task.id} - {task.content}
        </TaskContent>
        <RemoveButton onClick={() => removeTask(task.id)}>🗑️</RemoveButton>
      </TaskItem>
    ))}
  </TasksList>
);

export default Tasks;
