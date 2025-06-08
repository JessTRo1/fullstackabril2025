import { useEffect, useState } from 'react';
import EmailCard from './styles/components/EmailCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/base.scss';
import './styles/App.scss';

function App() {
  const [emails, setEmails] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/emails`)
      .then(res => res.json())
      .then(data => setEmails(data))
      .catch(err => console.error('Error al cargar emails:', err));
  }, []);

  const markAsRead = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/emails/${id}/read`, { method: 'POST' })
      .then(res => res.json())
      .then(updated => {
        setEmails(prev =>
          prev.map(email => (email.id === updated.id ? updated : email))
        );
      });
  };

  const archiveEmail = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/emails/${id}/archive`, { method: 'POST' })
      .then(res => res.json())
      .then(updated => {
        setEmails(prev =>
          prev.map(email => (email.id === updated.id ? updated : email))
        );
      });
  };

  return (
    <div className="app">
      <button onClick={() => setDarkMode(prev => !prev)} className="app__toggle-theme-icon">
        <FontAwesomeIcon
          icon={darkMode ? 'fa-sun' : 'fa-moon'}
          className={`app__icon ${darkMode ? 'app__icon--sun' : 'app__icon--moon'}`}
        />
      </button>
      <h1 className="app__title">Correos recibidos</h1>
      <div className="app__emails">
        {emails.map(email => (
          <EmailCard
            key={email.id}
            email={email}
            onMarkAsRead={markAsRead}
            onArchive={archiveEmail}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
