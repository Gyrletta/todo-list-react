import React from "react";
import { useSelector } from "react-redux";
import Form from "../tasks/Form";
import TaskList from "../tasks/TasksList";
import Buttons from "../tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import useTasks from "../../Hooks/useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const { removeTask, toggleTaskDone, markAllAsDone, addNewTask } = useTasks();

  const { tasks } = useSelector(selectTasks);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList removeTask={removeTask} />}
        extraHeaderContent={<Buttons markAllAsDone={markAllAsDone} />}
      />
    </Container>
  );
}

export default Tasks;
