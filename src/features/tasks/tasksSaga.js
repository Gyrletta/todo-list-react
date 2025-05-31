import {
  debounce,
  call,
  put,
  delay,
  select,
  takeEvery,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  selectTasks,
  setTasks,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHendler() {
  try {
    const tasks = yield select(selectTasks);
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield debounce(2000, fetchExampleTasks.type, fetchExampleTasksHendler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
