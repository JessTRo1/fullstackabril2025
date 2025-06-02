function FakeStoreItem({ title, price, image }) {
  return (
    <div className="product-card">
      <h3 className="product-card__title">{title}</h3>
      <img className="product-card__image" src={image} alt={title} />
      <p className="product-card__price">Precio: {price}€</p>
    </div>

  );
}

export default FakeStoreItem;