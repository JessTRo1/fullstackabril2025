import { useState, useEffect } from 'react';
import './api.css';

function GokuTransformations() {
  const [transformations, setTransformations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransformations = async () => {
      const gokuTransformationIds = [1, 2, 3, 4, 5];

      const fetchedTransformations = await Promise.all(
        gokuTransformationIds.map(async (id) => {
          try {
            const response = await fetch(`https://dragonball-api.com/api/transformations/${id}`);
            if (!response.ok) {
              console.warn(`ID ${id} failed with status ${response.status}`);
              return null;
            }
            return await response.json();
          } catch (err) {
            console.error(`Error fetching ID ${id}:`, err);
            return null;
          }
        })
      );

      const validTransformations = fetchedTransformations.filter(t => t !== null);
      setTransformations(validTransformations);
      setLoading(false);
    };


    fetchTransformations();
  }, []);

  if (loading) return <div className="loading-message">Cargando transformaciones de Goku...</div>;

  return (
    <div className="transformation-container">
      <h1 className="transformation-title">Transformaciones de Goku</h1>
      {transformations.map((transformation) => (
        <div className="transformation-card" key={transformation.id}>
          <div className="transformation-content-row">
            <img
              src={transformation.image}
              alt={transformation.name}
              className="transformation-image"
            />
            <div className="transformation-text">
              <h2 className="transformation-name">{transformation.name}</h2>
              <p className="transformation-info"><strong>ID:</strong> {transformation.id}</p>
              <p className="transformation-info"><strong>Ki requerido:</strong> {transformation.ki}</p>
              <p className="transformation-description">{transformation.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GokuTransformations;
