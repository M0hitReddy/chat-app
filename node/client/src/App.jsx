import React, { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'
// import Send from './assets/send.svg'
import InputMessage from './components/InputMessage'
import Container from './components/Container';
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
  const [name, setName] = useState("");
  const [names, setNames] = useState({});
  const socket = useMemo(() => io('http://localhost:8080'), []);

  useEffect(() => {

    setId(socket.id);
    console.log(socket.id);
    socket.on('connect', () => {
      // const newId = "" + socket.id;

      setId(prevId => prevId + socket.id);
      setName(prevName => prevName + socket.id);
      // setNames(prevNames => ({ ...prevNames, [socket.id]: socket.id }));
      socket.emit('change names', { [socket.id]: socket.id });
      // console.log(name);

    });

    socket.on('message', data => {
      console.log(data);
      setMessages(prevMessages => [...prevMessages, data]);
    });
    socket.on('join', (id) => {
      console.log('new joined ', id);
      // setNames(prevNames => prevNames, { [id]: id });

      setMessages(prevMessages => [...prevMessages, [id + ' joined', "joined"]]);
      // setNames
      // setNames(prevNames => ({ ...prevNames, [id]: id }));
    })
    socket.on('change names', data => {
      // setNames(prevNames => ({
      //   ...prevNames,
      //   ...data
      // }));
      setNames((data));

      // console.log(data, names);
    })
    // socket.emit('change names', {...names, [id]: name });
    return () => {
      // Clean up socket connection when component unmounts
      socket.disconnect();
    };

  }, [socket]);
  useEffect(() => {
    // setNames(prevNames => prevNames, { [id]: id });
    if (id != "") {
      console.log(names);
      // socket.emit('change names', {...names, [id]: name });

      // setNames(prevNames => prevNames, { [id]: id });
    }
  }, [names]);
  useEffect(() => {
    // if(name!='') socket.emit('change names', {[id]: name} );
    console.log(names);
  }, [name])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(socket.id);
    socket.emit('sent', [message, id]);
    setMessage('');

  }
  const handleSetName = () => {
    // e.prevent.default();
    // setNames([...names, { id: id, name: name }]);
    socket.emit('change names', { [id]: name });


  }
  return (
    <>
    {/* <Container/> */}
      <div className="container flex flex-col gap-4 justify-center align-center w-[20rem]  h-[100vh] m-auto">
        <div className="grid grid-cols-6 gap-1">
          <input className="name col-span-4 w-full px-2" onChange={e => { setName(e.target.value) }} value={name} />
          <button type='button' className='col-span-2 bg-slate-500 px-2 py-1 text-white rounded-sm' onClick={handleSetName}>set name</button>
        </div>
        <InputMessage onSubmit={handleSubmit} message={message} onChange={e => setMessage(e.target.value)} />
        <div className="messages">
          <ul className='flex flex-col gap-4'>
            {messages.map((msg, index) => (
              <li className={id == msg[1] ? 'self-end bg-black text-white px-3 py-1 rounded-md' : msg[1] === "joined" ? 'self-center text-slate-500' : 'self-start'} key={index}>
                <div className="msg">
                  <div className="name font-bold text-green-500">{id == msg[1] ? '' : names[msg[1]]}</div>
                  <div className={msg[1] === "joined" ? "text-base " : "text-xl" + " message"}>{msg[0]}</div>
                </div>
              </li>

            ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
