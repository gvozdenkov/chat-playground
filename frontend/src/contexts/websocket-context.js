import { createContext } from 'react';
import { io } from 'socket.io-client';

export var socket = io('http://localhost:3002');
export var WebSocketContext = createContext(socket);
export var WebSocketProvider = WebSocketContext.Provider;
