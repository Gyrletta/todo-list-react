import React from "react";
import "./style.css";

const Buttons = ({
  tasks,
  hideDoneTasks,
  toggleHideDoneTasks,
  markAllAsDone,
}) => (
  <div className="buttons-container">
    {tasks.length > 0 && (
      <React.Fragment>
        <button className="buttons__button" onClick={toggleHideDoneTasks}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="buttons__button"
          onClick={markAllAsDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </React.Fragment>
    )}
  </div>
);

export default Buttons;
