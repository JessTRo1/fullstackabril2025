import { useEffect, useState } from 'react';
import { getPokemons } from '../../services/pokemonService';
import PokemonItem from './PokemonItem';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemons()
      .then(data => {
        setPokemons(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al cargar Pokémon:", err);
        setError("No se pudieron cargar los Pokémon.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando Pokémon...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="pokemon-container">
      {pokemons.map(pokemon => (
        <PokemonItem key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
