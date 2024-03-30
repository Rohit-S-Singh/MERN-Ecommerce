import React, { useEffect } from 'react';
import io from 'socket.io-client';

const SocketClient = () => {
    useEffect(() => {
        // Connect to the Socket.IO server
        const socket = io('http://localhost:8080'); // Replace with your server URL

        // Example: Listen for messages from the server
        socket.on('rcvd-message', (data) => {
            console.log('Message from server:', data);
        });

        // Example: Emit a message to the server
        socket.emit('new-message', 'Hello from client!');
        
        // Clean up the socket connection when the component unmounts
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            {/* <h1>Socket.IO Client</h1>
            <p>Check console for incoming messages from the server.</p> */}
        </div>
    );
};

export default SocketClient;
