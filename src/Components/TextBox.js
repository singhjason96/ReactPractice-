import React, { useState } from "react";

const TextBox = () => {
    const [msg,setMsg] = useState('');
    
  
    return (
      <>
        <input onChange={(event)=> setMsg(event.target.value)}/> 
        <div> 
        {msg}
        </div>
   
      </>
    );
  };
  
export default TextBox;