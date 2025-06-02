import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FakeStoreList from './components/FakeStore/FakeStoreList';
import PokemonList from './components/Pokemon/PokemonList';
import VideoGameList from './components/VideoGames/VideoGameList';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav">
          <Link className="nav__link" to="/">FakeStore</Link>
          <Link className="nav__link" to="/pokemon">Pokémon</Link>
          <Link className="nav__link" to="/videogames">Videojuegos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<FakeStoreList />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/videogames" element={<VideoGameList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
