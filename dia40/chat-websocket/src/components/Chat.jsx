import React, { useState, useEffect, useRef } from 'react';
import './chat.scss';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('Mario-' + getRandomInt(9999));
    const [ws, setWs] = useState(null);
    const chatEndRef = useRef(null);

    useEffect(() => {
        const sockett = new WebSocket('ws://192.168.1.39:8000');

        sockett.onopen = () => console.log('Conectado al WebSocket');
        sockett.onmessage = (event) => {
            setMessages((prev) => [...prev, JSON.parse(event.data)]);
        };
        sockett.onerror = (err) => console.error('WebSocket error:', err);
        sockett.onclose = () => console.log('WebSocket desconectado');

        setWs(sockett);

        return () => sockett.close();
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (ws && message.trim()) {
            ws.send(JSON.stringify({ message, user }));
            setMessage('');
        }
    };

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="chat-container">
            <h2 className="chat-title">Chat WebSocket</h2>

            <input
                type="text"
                className='chat-user'
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder='Escribe tu nombre'
            />

            <div className='chat-box'>
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.user === user ? 'self' : 'other'}`}>
                        <strong>{msg.user}:</strong> {msg.message}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            <form onSubmit={sendMessage} className="chat-form">
                <input
                    type='text'
                    className='chat-input'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Escribe tu mensaje'
                />
                <button className="chat-button" type='submit'>Enviar</button>
            </form>
        </div>
    );

};

export default Chat;
