import React, { useEffect, useState } from "react";
import Form from "../tasks/Form";
import TaskList from "../tasks/TasksList";
import Buttons from "../tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import useTasks from "../../Hooks/useTasks";

function Tasks() {
  const { tasks, removeTask, toggleTaskDone, markAllAsDone, addNewTask } =
    useTasks();
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllAsDone={markAllAsDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
