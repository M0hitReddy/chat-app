import React, { useState } from "react";
import Send from "../assets/send.svg";
export default function InputMessage(props) {
    // const [message, setMessage] = useState('');
    return (
        <section className="m-3">
            <form className='flex w-full gap-2 ' onSubmit={props.onSubmit}>
                <input className='px-2 grow bg-slate-200 border-2 border-b-4 border-black rounded-lg' type="text" value={props.value} placeholder='message...' onChange={e => props.onChange(e)} />
                <button className=' w-[44px] h-[44px]  text-white rounded-lg text-black ' type="submit" title='send'><img className='w-[44px] h-[44px] bg-black rounded-full p-2' src={Send} alt="" /></button>
            </form>
        </section>
    );
}