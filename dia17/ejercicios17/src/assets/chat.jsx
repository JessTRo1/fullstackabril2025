import React, { useState, useRef, useEffect } from 'react';
import './chat.css';

function Chat({ messages: initialMessages }) {
    const [messages, setMessages] = useState(initialMessages || []);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        setMessages([...messages, { text: input, type: 'user' }]);
        setInput('');
    };

    return (
        <div className="chat">
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                    {message.text}
                </div>
            ))}
            <div ref={chatEndRef} />
            <form className="chat-input-form" onSubmit={handleSend}>
                <input
                    className="chat-input"
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button className="chat-send" type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chat;