// assets/ThemeToggle.jsx
import { useTheme } from './ThemeContext';

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Tema {darkMode ? 'claro' : 'oscuro'}
    </button>
  );
}

export default ThemeToggle;
