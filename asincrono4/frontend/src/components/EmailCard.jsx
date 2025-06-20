import '../styles/EmailCard.scss';

function EmailCard({ email, onMarkAsRead, onArchive }) {
  return (
    <div className="email-card">
      <h2 className="email-card__subject">{email.subject}</h2>
      <p className="email-card__from"><strong>De:</strong> {email.from}</p>
      <p className="email-card__body">{email.body}</p>
      <div className="email-card__status">
        <span><strong>Leído:</strong> {email.read ? 'Sí' : 'No'}</span>
        <span><strong>Archivado:</strong> {email.archived ? 'Sí' : 'No'}</span>
      </div>
      <div className="email-card__actions">
        {!email.read && (
          <button onClick={() => onMarkAsRead(email.id)} className="email-card__button">
            Marcar como leído
          </button>
        )}
        {!email.archived && (
          <button onClick={() => onArchive(email.id)} className="email-card__button email-card__button--archive">
            Archivar
          </button>
        )}
      </div>
    </div>
  );
}

export default EmailCard;
