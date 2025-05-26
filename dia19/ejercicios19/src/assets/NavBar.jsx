import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/user/42">User 42</Link> | 
                <Link to="/post/1">Post 1</Link>
                <Link to="/news">Noticias</Link>
            </nav>
        </nav>
    );
}

export default NavBar;