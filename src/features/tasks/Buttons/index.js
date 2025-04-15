import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import {
  selectHideDone,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
  selectTasks,
  toggleHideDone,
  markAllAsDone,
} from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(markAllAsDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
