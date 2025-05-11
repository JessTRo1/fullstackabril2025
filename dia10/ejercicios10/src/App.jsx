import './App.css';
import { useEffect } from 'react';
import Contador from './assets/Contador.jsx';
import AlternateText from './assets/EncendidoApagado.jsx';
import ListaColores from './assets/Lista.jsx';
import InputDinamico from './assets/InputDinamico.jsx';
import GokuTransformations from './assets/Api.jsx';
import Temporizador from './assets/Temporizador.jsx';
import Contador2 from './assets/contador2.jsx';
import Formulario from './assets/formulario.jsx';
import AlertButton from './assets/alertbutton.jsx';
import ListaArte from './assets/listaarte.jsx';

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

const listaObras = [
  { id: 1, nombre: "El jardín de las delicias", autor: "El Bosco", imagen: "https://b282c5de4f50ed30d5ce-25e9f6b52714e6c3d4dbb7e330152014.ssl.cf3.rackcdn.com/uploaded_thumb_icon/3cad6cf780ffa49650dc40c730e41e59/jardin_de_las_delicias_1.jpg" },
  { id: 2, nombre: "La balsa de Medusa", autor: "Géricault", imagen: "https://media.rcf.fr/sites/default/files/styles/128x128/public/2021-06/1280px-jean_louis_theodore_gericault_-_la_balsa_de_la_medusa_museo_del_louvre_1818-19.jpg.webp" },
  { id: 3, nombre: "La persistencia de la memoria", autor: "Salvador Dalí", imagen: "https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9kM3Qzb3pmdG1kbWgzaS5jbG91ZGZyb250Lm5ldC9wcm9kdWN0aW9uL3BvZGNhc3RfdXBsb2FkZWQvNTA1NTY2Ni81MDU1NjY2LTE1ODgwMjA1ODY5MDgtNmQyMjA0YWM5ZDNlYy5qcGc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D" },
  { id: 4, nombre: "Composición en rojo, azul y amarillo", autor: "Mondrian", imagen: "data:image/jpeg;base64,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" },
  { id: 5, nombre: "El grito", autor: "Edvard Munch", imagen: "https://pm1.aminoapps.com/6284/75eeafea3a6ac8d928fb8d3fc7ea0fa29eb96771_128.jpg" }
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
      <Formulario />
      <AlertButton 
        message="Alerta de prueba" 
        buttonText="Clic para ver mensaje"
      />
      <ListaArte listaObras={listaObras} />
    </div>
  );
}

export default App;
