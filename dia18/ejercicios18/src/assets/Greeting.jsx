import { useLanguage } from './LanguageContext';

function Greeting() {
  const { language } = useLanguage();

  return (
    <p>
      {language === 'es' ? 'Texto de ejemplo en español.' : 'Sample text in English.'}
    </p>
  );
}

export default Greeting;
