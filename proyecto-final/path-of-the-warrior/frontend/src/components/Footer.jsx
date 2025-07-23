// Footer fijo para toda la aplicación
export default function Footer() {
  const year = new Date().getFullYear(); // Obtiene el año actual dinámicamente

  return (
    <footer className="footer">
      <p className="footer__text">
        © {year}{' '}
        <a
          className="footer__link"
          href="https://github.com/JessTRo1"
          target="_blank"              // Abre el enlace en una pestaña nueva
          rel="noopener noreferrer"   // Mejora la seguridad al usar target="_blank"
          title="GitHub"
        >
          By J.Torres &#9775;          {/* Enlace GitHub  */}
        </a>
      </p>
      <p className="footer__quote">
        {/* Cita fija */}
        "The pain you feel today will be the strength you carry tomorrow."
      </p>
    </footer>
  );
}
