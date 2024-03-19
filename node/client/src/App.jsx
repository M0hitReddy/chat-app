import React, { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'
const App = () => {
  // const socket = io('http://localhost:8080');
  // socket.on('connect', () => {
  //   console.log('connected',socket.id);
  // });
  // socket.on('sent',data=>{
  //   console.log(data);

  // })

  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [id, setId] = useState('');
  const [messages, setMessages] = useState([]);

  const socket = useMemo(() => io('http://localhost:8080'), []);
  useEffect(() => {

    // setId(socket.id);
    // console.log(socket.id);
    socket.on('connect', () => {
      console.log('connected ', socket.id);
      setId("" + socket.id);
    });
    socket.on('message', data => {
      console.log(data);
      setMessages(prevMessages => [...prevMessages, data]);
    });

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(socket.id);
    socket.emit('sent', [message, id]);

  }
  return (
    <>
      <div className="container flex flex-col gap-4 justify-center align-center w-[20rem]  h-[100vh] m-auto">
        <div className="id">{id}</div>
        <form className='flex gap-4 w-11/12 flex-col' onSubmit={handleSubmit}>
          <input className='p-2  border-2 border-black rounded-lg' type="text" value={message} placeholder='message...' onChange={e => setMessage(e.target.value)} />
          <input className='p-2  border-2 border-black rounded-lg' type="text" value={room} placeholder='room id...' onChange={e => setRoom(e.target.value)} />
          <button className='bg-slate-800 self-end text-white rounded-lg w-fit py-2 px-4' type="submit" onSubmit={handleSubmit}>Send</button>
        </form>
        <div className="messages">
          <ul className='flex flex-col'>
            {messages.map((msg, index) => (
              <li className={id == msg[1] ? 'self-end' : 'self-start'} key={index}>{msg[0]}</li>
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}

export default App
