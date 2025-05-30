import {
  debounce,
  call,
  put,
  delay,
  select,
  takeEvery,
} from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

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

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  console.log("Saga jest podlaczona!");
  yield debounce(2000, fetchExampleTasks.type, fetchExampleTasksHendler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
