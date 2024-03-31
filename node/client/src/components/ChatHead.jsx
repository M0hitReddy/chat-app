import React from 'react'
import User from '../assets/user.svg'
function ChatHead(props) {
  return (
    <section className='p-4 bg-slate-200'>
        <div className='flex gap-3'>
            <img src={User} className='w-8 h-8' alt="" />
            <p className='text-xl'>{props.name}</p>
            
        </div>
        
    </section>
  )
}

export default ChatHead