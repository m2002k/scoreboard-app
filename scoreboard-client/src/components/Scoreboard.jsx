import React, { useEffect, useState } from 'react';

function Scoreboard({ homeTeam, awayTeam, period, timeRemaining, gameStatus }) {
  return (
    <div className="scoreboard">
      <h2>{homeTeam.city} {homeTeam.name} vs {awayTeam.city} {awayTeam.name}</h2>
      <p><strong>{homeTeam.abbreviation}</strong>: {homeTeam.score} | <strong>{awayTeam.abbreviation}</strong>: {awayTeam.score}</p>
      <p>Period: {period} | Time Remaining: {timeRemaining}</p>
      <p>Status: {gameStatus}</p>
    </div>
  );
}

export default Scoreboard;
export default Scoreboard;