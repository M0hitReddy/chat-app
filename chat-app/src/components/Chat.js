import React from 'react';
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation.tsx";

import 'bootstrap-icons/font/bootstrap-icons.css';
// import { GridBackground } from './ui/gridbg.js';
export default function Chat() {
    return (
        <>
            <div className="container pt-16 relative gap-6 absolute flex flex-col-reverse bottom-0 max-w-[600px] w-11/12 h-[80vh] px-3 py-2 rounded-lg m-auto">
                <BackgroundGradientAnimation />
                {/* <GridBackground /> */}
                <div className="title absolute rounded-t-lg flex align-center gap-3 top-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-gray-100 text-white left-0 right-0 p-4">
                    <img
                        
                        height={100}
                        width={100}
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                        alt="..."
                        className="object-cover !m-0 !p-0 object-top rounded-full h-10 w-10 border-1 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                    />
                    <p className='text-white text-2xl'>Happen</p>
                </div>
                <div className="input flex justify-center flex-row w-full">
                    <input className="w-full border-none outline-none rounded-full m-2 px-4 py-2" type="text" placeholder='Message...' />
                    <button className="send"><i className="bg-white p-[12px] rounded-full bi bi-send-fill"></i></button>
                </div>
                <div className="chat pt-10 overflow-y-scroll no-scrollbar flex flex-col-reverse gap-6 font-medium">
                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>

                    <div className="msg bg-blue-600 text-white px-3 py-1 self-end rounded-lg"><div className="text mb-1">bjhj feqb hbfqh</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                    <div className="msg bg-white px-3 py-1 self-start rounded-lg"><div className="text mb-1">buvgybuvgybuvgy</div><div className="time float-end text-[10px] text-slate-400">2:23 PM</div></div>
                </div>
            </div>
        </>
    );
}