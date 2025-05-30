import { debounce, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHendler() {
  try {
    console.log("Zaczynam pracę");
    const tasks = yield select(selectTasks);
    console.log(tasks);
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* watchFetchExampleTasks() {
  console.log("Saga jest podlaczona!");
  yield debounce(2000, fetchExampleTasks.type, fetchExampleTasksHendler);
}
