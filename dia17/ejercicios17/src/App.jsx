import './App.css';
import InputAutoFocus from './assets/botonfocus';
import ContadorRenders from "./assets/counter";
import Timer from "./assets/timer";
import ScrollEnd from "./assets/scrollbutton";
import Chat from "./assets/chat";

function App() {
  return (
    <div className="App">
      <InputAutoFocus />
      <ContadorRenders />
      <Timer />
      <ScrollEnd />
      <Chat />
    </div>
  );
};

export default App;