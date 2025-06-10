import ProductList from '../components/ProductList';
import '../styles/catalogo.css';


function Catalogo() {
  return (
    <div className="catalogo">
      <h1 className="catalogo__title">Catálogo</h1>
      <ProductList />
    </div>
  );
}

export default Catalogo;
