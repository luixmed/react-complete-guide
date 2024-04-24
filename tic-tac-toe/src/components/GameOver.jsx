import { Div } from "./GameOverStyles";

function GameOver({ winner, onResetGame }) {
  return (
    <Div>
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It&apos;s a draw</p>}
      <button onClick={onResetGame}>Rematch!</button>
    </Div>
  );
}

export default GameOver;
