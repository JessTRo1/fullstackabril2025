import './caja.css'

const Caja = ({ children }) => {
  return (
    <div className="caja-container">
      {children}
    </div>
  );
};

export default Caja;