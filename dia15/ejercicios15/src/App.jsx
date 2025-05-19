import { useState } from 'react';
import GitHubUser from "./assets/GitHubUser";
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [searchUsername, setSearchUsername] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setSearchUsername(username.trim());
    }
  };

  return (
    <div className="app">
      <h1>Buscador de perfiles de GitHub</h1>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de usuario de GitHub"
        />
        <button type="submit">Buscar</button>
      </form>

      {searchUsername && <GitHubUser username={searchUsername} />}
    </div>
  );
}

export default App;