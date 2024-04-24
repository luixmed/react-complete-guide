import { useState } from "react";
import Player from "./Player";
import GameBoard from "./GameBoard";
import GameOver from "./GameOver";
import { DivStyled } from "./GameContainerStyles";
import { WINNING_COMBINATIONS } from "../winning-combinations";

const INITIAL_GAME_BOARD = new Array(9).fill(null);
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function derivedActivePlayer(gameTurns) {
  const currentPlayer = gameTurns[0]?.player === "X" ? "O" : "X";
  return currentPlayer;
}

function derivedGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD];

  gameTurns.forEach((turn) => {
    const { index, player } = turn;
    gameBoard[index] = player;
  });

  return gameBoard;
}

function derivedWinner(gameBoard, players) {
  let winner = null;

  WINNING_COMBINATIONS.forEach((combination) => {
    const firstValue = gameBoard[combination[0]];
    const secondValue = gameBoard[combination[1]];
    const thirdValue = gameBoard[combination[2]];

    if (firstValue && firstValue === secondValue && firstValue === thirdValue) {
      winner = players[firstValue];
    }
  });

  return winner;
}

function GameContainer() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  // *****DERIVED STATE*****
  const activePlayer = derivedActivePlayer(gameTurns);
  const gameBoard = derivedGameBoard(gameTurns);
  const winner = derivedWinner(gameBoard, players);
  const draw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(idx) {
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [
        {
          index: idx,
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function resetGame() {
    setGameTurns([]);
  }

  function handlePlayers(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <DivStyled>
      <div>
        <Player
          initialName={PLAYERS.X}
          symbol="X"
          isActive={activePlayer === "X"}
          onChangeName={handlePlayers}
        />
        <Player
          initialName={PLAYERS.O}
          symbol="O"
          isActive={activePlayer === "O"}
          onChangeName={handlePlayers}
        />
      </div>

      <GameBoard
        onSelectSquare={handleSelectSquare}
        turns={gameTurns}
        board={gameBoard}
      />
      <div className={`modal ${winner || draw ? "show-modal" : undefined}`}>
        {(winner || draw) && (
          <GameOver winner={winner} onResetGame={resetGame} />
        )}
      </div>
    </DivStyled>
  );
}

export default GameContainer;
