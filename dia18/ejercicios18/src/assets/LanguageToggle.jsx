import { useLanguage } from './LanguageContext';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      Idioma ({language === 'es' ? 'ES' : 'EN'})
    </button>
  );
}

export default LanguageToggle;