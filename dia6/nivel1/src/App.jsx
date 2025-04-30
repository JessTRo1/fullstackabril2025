import './App.css';  
import Header from './assets/header.jsx'; 
import Main from './assets/main.jsx';

function App() {
  const menu = ["Inicio", "Nosotros", "Contacto"];

  return (
    <>
      <Header name="Mi web" menu={menu} />
      <Main title="Bienvenido a Mi Web" />
    </>
  );
}


export default App;  