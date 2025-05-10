import './listachildren.css'

const ListaAperturas = ({ children }) => {
  return (
    <div className='openings-container'>
    <h2 className='openings-title'>Otras Aperturas :</h2>
    <ul className="openings-list">
      {children}
    </ul>
    </div>
  );
};

export default ListaAperturas;