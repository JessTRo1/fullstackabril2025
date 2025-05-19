import { useState, useEffect } from 'react';
import './GitHubUser.css';

function GitHubUser({ username }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://api.github.com/users/${username}`);

                if (!response.ok) {

                    if (response.status === 404) {
                        throw new Error(`El usuario "${username}" no existe en GitHub`);
                    } else if (response.status === 403) {
                        throw new Error('Límite de solicitudes excedido. Intenta nuevamente más tarde');
                    } else {
                        throw new Error(`Error al obtener datos (código ${response.status})`);
                    }
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                setError(error.message);
                setUserData(null);
            } finally {
                setLoading(false);
            }
        }

        if (username) {
            fetchUserData();
        }
    }, [username]);
    // Estado de carga
    if (loading && username) return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Cargando datos de {username}...</p>
        </div>
    );
    // Estado de error
    if (error) return (
        <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h3>ERROR</h3>
            <p>{error}</p>
        </div>
    );
// Estado inicial (sin búsqueda)
    if (!userData) return (
        <div className="empty-state">
            <p>Ingresa un nombre de usuario de GitHub para ver su perfil</p>
        </div>
    );
// Estado válido - datos del usuario
    return (
        <div className="github-user">
            <div className="user-header">
                <img
                    src={userData.avatar_url}
                    alt={`Avatar de ${userData.login}`}
                    className="avatar"
                />
                <h2>{userData.name || userData.login}</h2>
                {userData.bio && <p className="bio">{userData.bio}</p>}
            </div>

            <div className="user-stats">
                <div className="stat">
                    <span className="stat-number">{userData.public_repos}</span>
                    <span className="stat-label">Repositorios</span>
                </div>
                <div className="stat">
                    <span className="stat-number">{userData.followers}</span>
                    <span className="stat-label">Seguidores</span>
                </div>
                <div className="stat">
                    <span className="stat-number">{userData.following}</span>
                    <span className="stat-label">Siguiendo</span>
                </div>
            </div>

            <div className="user-info">
                {userData.location && (
                    <p><strong>Ubicación:</strong> {userData.location}</p>
                )}
                {userData.blog && (
                    <p>
                        <strong>Sitio web:</strong>
                        <a href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            {userData.blog}
                        </a>
                    </p>
                )}
                <p>
                    <strong>Perfil GitHub:</strong>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        @{userData.login}
                    </a>
                </p>
            </div>
        </div>
    );
}

export default GitHubUser; 
