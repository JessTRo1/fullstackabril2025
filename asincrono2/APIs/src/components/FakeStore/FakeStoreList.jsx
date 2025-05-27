import { useSate, useEffect } from 'react';
import { getFakeStoreProducts } from '../../services/fakeStoreService';
import FakeStoreItem from './FakeStoreItem';

function FakeStoreList() {
        const [ products, setProducts ] = useSate([]);
        const [ loading, setLoading ] = useSate(true);
        const [ error, setError] = useSate(null);

    useEffect(() => {
        getFakeStoreProducts()
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch(err => {
            setError("Error al cargar productos.");
            setLoading(false);
        })
}, []);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='fakestore-container'>
            {products.map(product => (
                <FakeStoreItem key= {product.id} {...product} />
            ))}
        </div>
    );
}
export default FakeStoreList;
