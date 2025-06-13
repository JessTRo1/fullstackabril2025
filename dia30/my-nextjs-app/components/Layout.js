import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Layout({ children }) {
    const router = useRouter();

    // Detecta si es la página de perfil
    const esPerfil = router.pathname.startsWith('/user');
    const username = router.query.username;

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/about">Acerca</Link></li>
                        <li><Link href="/posts/1">Post 1</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/dashboard/settings">Settings</Link></li>
                        <li><Link href="/dashboard/stats">Stats</Link></li>
                        <li><Link href="/user/jesus">Mi Perfil</Link></li>
                    </ul>
                </nav>
                {esPerfil && username && (
                    <p>Estás viendo el perfil de: <strong>{username}</strong></p>
                )}
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}

