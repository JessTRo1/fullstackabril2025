import './App.css';  
import Header from './assets/header.jsx'; 
import Main from './assets/main.jsx';
import Footer from './assets/footer.jsx';

function App() {
  const menu = ["Inicio", "Nosotros", "Contacto"];

  return (
    <>
      <Header name="Mi web" menu={menu} />
      <Main title="Bienvenido a Mi Web" />
      <Footer message="Este es un mensaje personalizado del footer para nivel 1" />
    </>
  );
}


export default App;  