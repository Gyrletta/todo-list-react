import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllAsDone }) => (
  <div className="buttons-container">
    {tasks.length > 0 && (
      <React.Fragment>
        <button onClick={toggleHideDone} className="buttons__button">
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
