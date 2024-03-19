// import logo from './logo.svg';
import './App.css';
import People from './components/People';
import Chat from './components/Chat';
import React from 'react';
import { io } from 'socket.io-client'
function App() {
  const socket = io('http://localhost:8080');
  socket.on('connect', () => {
    console.log('connected', socket.id);
  });
  socket.on('sent', data => {
    console.log(data);
  })
  // socket.on('sent',data=>{ 
  return (
    <div className="App">
      <People />
      <Chat />
    </div>
  );
}

export default App;
