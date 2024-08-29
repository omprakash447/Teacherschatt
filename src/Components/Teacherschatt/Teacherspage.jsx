import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Teacherspage.css";

function Teacherspage() {
    const { name } = useParams();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'You' }]);
            setInput('');
        }
    };

    return (
        <div className='chat-room'>
            <h1>Welcome to {name}'s Chat Room</h1>
            <div className='chat-container'>
                <div className='messages'>
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
                            <p>{msg.text}</p>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className='chat-form'>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Type a message...'
                    />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Teacherspage;
