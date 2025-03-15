import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const checkWinner = (squares) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };


  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = checkWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXNext ? "X" : "O"}`;


  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <h2>Tic Tac Toe</h2>
      <p>{status}</p>
      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <button className="reset" onClick={resetGame}>
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;
