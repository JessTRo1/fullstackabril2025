import './App.css';
import Contador from './assets/contador.jsx';
import AlternateText from './assets/encendidoapagado.jsx';
import ListaColores from './assets/lista.jsx';
import InputDinámico from './assets/inputdinamico.jsx'
import GokuTransformations from './assets/api.jsx'

function App() {
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
      <InputDinámico />
      <GokuTransformations />
    </div>
  );
}

export default App;
