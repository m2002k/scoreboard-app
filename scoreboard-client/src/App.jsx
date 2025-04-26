import { useState, useEffect } from 'react';
import './App.css';
import GameCard from './components/GameCard';
import Scoreboard from './components/Scoreboard';

function App() {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/game');
        if (!response.ok) {
          throw new Error('Failed to fetch game data');
        }
        const data = await response.json();
        setGameData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGameData();

    // Set up polling every 3 seconds
    const interval = setInterval(fetchGameData, 3000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="loading">Loading game data...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <header className="app-header">
        <h1>NBA Live Scoreboard</h1>
      </header>
      <main>
        {gameData && <GameCard game={gameData} />}
      </main>
    </div>
  );
}

export default App;