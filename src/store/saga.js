import { all } from "redux-saga/effects";
import startGame from "./saga/gameInit";

export default function* () {
  yield all([startGame()]);
}
