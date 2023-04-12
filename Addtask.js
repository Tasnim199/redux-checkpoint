import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddTodo } from '../store/todoSlice';

export default function Addtask() {
    const [show, setShow] = useState(false);
    const [todo, setTodo] = useState({
      id:Math.random(),
      title:"",
      description:"",
      isDone:false,

    })
    const dispatch=useDispatch();
  return (
    <div className='add'>
        <input type='text' onFocus={()=> setShow(true)}
       onBlur={()=> setShow(false)} 
       onchange={(e)=> setTodo({...todo,title: e.target.value})}/>
        <button onClick={()=>dispatch(AddTodo(todo))}>+</button>
      
    </div>

  )
  
  
}
