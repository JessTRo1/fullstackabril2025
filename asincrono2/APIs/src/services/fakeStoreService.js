export const getFakeStoreProducts = async () => {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);  // Cancela si tarda >5s

        const res = await fetch('https://fakestoreapi.com/products', {
            signal: controller.signal,
        });
        
        
        clearTimeout(timeout);  
        
        if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error al obtener productos:", error.message);
        throw error;
    }
};