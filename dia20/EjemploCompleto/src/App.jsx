import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewReading from "./pages/NewReading";
import ReadingPage from "./pages/ReadingPage";
import Navbar from "./components/NavBar";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-task" element={<NewReading />} />
          <Route path="/task/:id" element={<ReadingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
