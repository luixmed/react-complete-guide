import { Ol } from "./GameBoardStyles";

function GameBoard({ onSelectSquare, board }) {
  return (
    <Ol>
      {board.map((symbol, idx) => (
        <li key={idx}>
          <button onClick={() => onSelectSquare(idx)} disabled={symbol}>
            {symbol}
          </button>
        </li>
      ))}
    </Ol>
  );
}

export default GameBoard;
