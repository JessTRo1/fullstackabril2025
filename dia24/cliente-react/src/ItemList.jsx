function ItemList({ items, setItems, setItemEditando }) {
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/items/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          setItems(prev => prev.filter(item => item.id !== id));
        } else {
          console.error('Error al eliminar el item');
        }
      })
      .catch(err => console.error('Error en DELETE:', err));
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.nombre}
          <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          <button onClick={() => setItemEditando(item)}>Editar</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;