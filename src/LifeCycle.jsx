import React from 'react';
import { useState , useEffect } from 'react';

const LifeCycle = () => {
    const [text, setText]=useState("");
    const [show,setShow]=useState(false);

    const getText=(e)=>{
        setText(e.target.value);
    }

    const showText=()=>{
        setShow(!show);
    }

    useEffect(()=>{
        console.log("Component Mounted"); 
    })

  return (
      <div style={{textAlign:"center"}}>
      <button onClick={showText}>Show text</button>
        {show && 
        <div>
            <input onChange={getText}/>
            {text}
        </div>
        }
      </div>
  )
}

export default LifeCycle;

/*
ComponentMount
Update
ComponentUnMount*/