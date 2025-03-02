import React, { useState } from "react";
import { FormContainer, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Dodaj nowe zadanie.."
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormContainer>
  );
};

export default Form;
