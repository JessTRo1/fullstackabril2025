import { useEffect, useState } from 'react';

export default function Home() {
    const [mensaje, setMensaje] = useState('');
    const [numero, setNumero] = useState(null);
     const [nombre, setNombre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/nombres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre }),
        });

        if (res.ok) {
            setMensaje('Nombre enviado con éxito');
            setNombre('');
        } else {
            setMensaje('Error al enviar el nombre');
        }
    };

    useEffect(() => {
        fetch('/api/saludo')
            .then(res => res.json())
            .then(data => setMensaje(data.mensaje));

        fetch('/api/numero')
            .then(res => res.json())
            .then(data => setNumero(data.numero));
    }, []);

    return (
        <main>
            <h1>Mensaje de la API:</h1>
            <p>{mensaje}</p>
            <h2>Número aleatorio:</h2>
            <p>{numero}</p>
            <h2>Formulario de Nombres</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Introduce tu nombre"
                />
                <button type="submit">Enviar</button>
            </form>
        </main>
    );
}
