import { all } from "redux-saga/effects";
import { tasksSaga, watchFetchExampleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
