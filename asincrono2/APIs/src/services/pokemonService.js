export const getPokemons = async (limit = 10) => {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
            signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();


        // Segundo fetch por cada Pokémon para detalles
        const detailedData = await Promise.all(
            data.results.map(pokemon =>
                fetch(pokemon.url)
                    .then(res => res.json())
                    .catch(err => {
                        console.warn(`Error al cargar ${pokemon.name}:`, err);
                        return null;
                    })
            )
        );

        // Filtrar los que han fallado
        return detailedData.filter(p => p !== null);
    } catch (error) {
        console.error("Error al obtener Pokémon:", error.message);
        throw error;
    }
};
