import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../store/slices/gameInit";

function StartGamePage() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(startGame({ username }));
  };
  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your Name.."
      />
      <button onClick={startGameHandler}>Start Game</button>
    </div>
  );
}

export default StartGamePage;
