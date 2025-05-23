import { useCart } from './CartContext';

function ProductList() {
  const { addItem } = useCart();

  const products = [
    { id: 1, name: 'Espada de plata', price: 120 },
    { id: 2, name: 'Poción de salud', price: 25 },
    { id: 3, name: 'Armadura de cuero', price: 85 },
  ];

return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price} monedas
            <button onClick={() => addItem(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;