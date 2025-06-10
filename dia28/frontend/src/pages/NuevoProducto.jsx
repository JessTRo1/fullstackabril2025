import ProductForm from '../components/ProductForm';
import '../styles/nuevo-producto.css';


function NuevoProducto() {
  return (
    <div className="nuevo-producto">
      <h1 className="nuevo-producto__title">Crear Producto</h1>
      <ProductForm />
    </div>
  );
}

export default NuevoProducto;
