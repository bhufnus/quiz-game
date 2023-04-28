import { take, fork } from "redux-saga/effects";
import { startGame } from "../slices/gameInit";

function* fetchQuestionsSaga() {
  console.log("fetch questions");
}

export default function* startGameSaga() {
  while (true) {
    yield take(startGame.type);
    yield fork(fetchQuestionsSaga);
  }
}
