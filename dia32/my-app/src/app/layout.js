import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import '../styles/global.css';
import '../styles/navbar.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Mi Proyecto',
  description: 'Proyecto en Next.js con App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="navbar">
          <ul className="navbar__lista">
            <li><Link className="navbar__enlace" href="/"><span>Inicio</span></Link></li>
            <li><Link className="navbar__enlace" href="/productos"><span>Productos</span></Link></li>
            <li><Link className="navbar__enlace" href="/productos/nuevo"><span>Nuevo producto</span></Link></li>
          </ul>
        </nav>
        {children}</body>
    </html>
  );
}

