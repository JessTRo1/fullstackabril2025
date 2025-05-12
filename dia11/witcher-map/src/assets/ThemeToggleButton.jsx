import './ThemeToggleButton.css';

function ThemeToggleButton({ darkMode, onToggle }) {
    return (
        <button className='theme-toggle-button' onClick={onToggle}>
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"} />
        </button>
    );
}

export default ThemeToggleButton;