import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

function App() {
  const [items, setItems] = useState([]);
  const [itemEditando, setItemEditando] = useState(null);


  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('Error fetching items:', err));
  }, []);

  return (
    <div>
      <h1>Gestor de Elementos</h1>
      <ItemForm setItems={setItems} itemEditando={itemEditando} setItemEditando={setItemEditando} />
      <ItemList items={items} setItems={setItems} setItemEditando={setItemEditando} />
    </div>
  );
}

export default App;
