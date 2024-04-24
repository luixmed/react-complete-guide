import { useState } from "react";
import { Div } from "./PlayerStyles";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    isEditing && onChangeName(symbol, playerName);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <Div>
      {isEditing ? (
        <input
          type="text"
          value={playerName}
          required
          onChange={handleChange}
        />
      ) : (
        <p className={isActive ? "active" : undefined}>
          {playerName} <span>{symbol}</span>
        </p>
      )}

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </Div>
  );
}

export default Player;
