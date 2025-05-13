import './css/ThemeToggleButton.css';

function ThemeToggleButton({ darkMode, onToggle }) {
    return (
    <div className="theme-toggle-buttons">
        <button className='theme-toggle-button' onClick={onToggle}>
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"} />
        </button>
    </div>
  );
}


export default ThemeToggleButton;