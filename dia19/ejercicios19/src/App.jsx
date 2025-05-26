import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./assets/Home";
import About from "./assets/About";
import NavBar from "./assets/NavBar";
import User from "./assets/User";
import Post from "./assets/Post";
import NewsList from "./assets/NewsList";
import NewsDetail from "./assets/NewsDetail";
import './App.css';

function App() {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;