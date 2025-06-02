// VideoGameList.jsx
import { useEffect, useState } from 'react';
import { getVideoGames } from '../../services/videoGameService';
import VideoGameItem from './VideoGameItem';

function VideoGameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideoGames()
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al cargar videojuegos:", err);
        setError("No se pudieron cargar los videojuegos.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando videojuegos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="videogame-container">
      {games.map(game => (
        <VideoGameItem key={game.id} {...game} />
      ))}
    </div>
  );
}

export default VideoGameList;
