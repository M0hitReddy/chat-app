import React from 'react'

function Messages(props) {
    return (
        <section className='grow '>
            <ul className='flex flex-col gap-4'>
                {props.messages.map((msg, index) => (
                    <li className={props.id == msg[1] ? 'self-end bg-black text-white px-3 py-1 rounded-md' : msg[1] === "joined" ? 'self-center text-slate-500' : 'self-start'} key={index}>
                        <div className="msg">
                            <div className="name font-bold text-green-500">{props.id == msg[1] ? '' : props.names[msg[1]]}</div>
                            <div className={msg[1] === "joined" ? "text-base " : "text-xl" + " message"}>{msg[0]}</div>
                        </div>
                    </li>

                ))
                }
            </ul>
        </section>
    )
}

export default Messages