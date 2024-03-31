import React, { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client';
import ChatHead from './ChatHead';
import InputMessage from './InputMessage'
import Messages from './Messages'
function Container() {
    const [message, setMessage] = useState('');
    const [room, setRoom] = useState('');
    const [id, setId] = useState('');
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState("");
    const [names, setNames] = useState({});
    const socket = useMemo(() => io('http://localhost:8080'), []);
    useEffect(() => {
        socket.on('connect', () => {
            setId(prevId => prevId + socket.id);
            setName(prevName => prevName + socket.id);
            socket.emit('change names', { [socket.id]: socket.id });

        });
        socket.on('message', data => {
            console.log(data);
            setMessages(prevMessages => [...prevMessages, data]);
        });
        socket.on('join', (id) => {
            console.log('new joined ', id);
            setMessages(prevMessages => [...prevMessages, [id + ' joined', "joined"]]);
        })
        socket.on('change names', data => {
            setNames((data));
        })
        return () => {
            socket.disconnect();
        };
    }, [socket])
    useEffect(() => {
        if (id != "") {
            console.log(names);
        }
    }, [names]);
    const handleSend = (e) => {
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
        <section className='flex flex-col h-[100vh]'>
            <ChatHead name={name} />
            <Messages messages={messages} id={id} names={names}/>
            <InputMessage onSubmit={handleSend} value={message} onChange={e => setMessage(e.target.value)} />
        </section>
    )
}

export default Container