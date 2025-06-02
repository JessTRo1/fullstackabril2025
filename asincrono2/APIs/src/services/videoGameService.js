// videoGameService.js

const API_KEY = 'e3c0e1bec4c64a9db296ac2292e196f0';

export const getVideoGames = async () => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`, {
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data.results; // Array de juegos
  } catch (error) {
    console.error("Error al obtener videojuegos:", error.message);
    throw error;
  }
};
