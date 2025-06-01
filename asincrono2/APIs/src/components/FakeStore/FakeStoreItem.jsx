function FakeStoreItem({ title, price, image }) {
  return (
    <div className="product-card">
        <h3>{title}</h3>
      <img src={image} alt={title} />    
      <p>Precio: {price}€</p>
    </div>
  );
}

export default FakeStoreItem;