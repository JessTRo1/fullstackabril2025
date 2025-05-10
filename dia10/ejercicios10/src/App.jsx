import './App.css';
import { useEffect } from 'react';
import Contador from './assets/Contador.jsx';
import AlternateText from './assets/EncendidoApagado.jsx';
import ListaColores from './assets/Lista.jsx';
import InputDinamico from './assets/InputDinamico.jsx';
import GokuTransformations from './assets/Api.jsx';
import Temporizador from './assets/Temporizador.jsx';
import Contador2 from './assets/contador2.jsx';

function App() {
 useEffect(() => {
  const colors = [
    'rgb(0, 65, 112)',
    'rgb(65, 0, 112)',
    'rgb(0, 112, 60)',
    'rgb(112, 65, 0)'
  ];

  let currentIndex = 0;
  const interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];
  }, 2000);

  return () => clearInterval(interval);
}, []);

  const colores = [
    { id: 1, color: "azul" },
    { id: 2, color: "verde" },
    { id: 3, color: "rojo" }
  ];

  return (
    <div className="app">
      <Contador />
      <AlternateText />
      <ListaColores colores={colores} />
      <InputDinamico />
      <div>
        <h2>Transformaciones de Goku</h2>
        <GokuTransformations />
      </div>
      <Temporizador />
      <Contador2 />
    </div>
  );
}

export default App;
