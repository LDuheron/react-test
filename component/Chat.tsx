import React, { useEffect, useState, useRef } from 'react';
import '../style/Chat.css'; // Make sure to create this CSS file
import Sidebar from './Sidebar';


function getCookie(name: string): string {
  let cookieValue = "";
  const allCookies = document.cookie.split(';');
  allCookies.forEach(cookie => {
    const [key, value] = cookie.split('=');
    if (key.trim() === name) {
      cookieValue = value;
    }
  });
  return cookieValue;
}

const Chat: React.FC = () => {
  let login: string = getCookie('login');
  let token: string = getCookie('access_token');

  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');
//   const socketRef = useRef<Socket | null>(null);

//   useEffect(() => {
//     socketRef.current = io(REACT_APP_BACKEND_URL);

//     socketRef.current.emit('authenticate', token, login);

//     socketRef.current.on('private-message-sent', (data: {login: string, receiver: string, content: string}) => {
//       console.log('%s sent private message to %s: %s', data.login, data.receiver, data.content);
//     });

//     socketRef.current.on('private-message-received', (data: {login: string, receiver: string, content: string}) => {
//       console.log('%s received private message from %s: %s', data.receiver, data.login, data.content);
//     });
//     return () => {
//       if (socketRef.current) socketRef.current.close()
//     };
//   }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form action
    sendPrivateMessage(token, login, receiver, message);
    setMessage('');
  };

  const sendPrivateMessage = (_token: string, _login: string, _receiver: string, _content: string) => {
    const msgPayload: {token: string, login: string, receiver: string, content: string} = {token: _token, login: _login, receiver: _receiver, content: _content};
    if (socketRef.current) {
      socketRef.current.emit('private-message', msgPayload);
      console.log('sent');
    }
      else console.log('Socket connection failed');
  };

  return (
    <div className="chat-container">
      {/* <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Receiver's login"
          value={receiver}
          onChange={e => setReceiver(e.target.value)}
        />
        <textarea
          placeholder="Type your message..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send Message</button>
      </form> */}
	  <Sidebar />
    </div>
  );
};

export default Chat;