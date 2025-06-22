import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import '../styles/global.css';

export const metadata = {
  title: 'Mi App',
  description: 'Descripción',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
