import React from 'react'
import {useState, useEffect } from 'react'

const Bucle = () =>{
    const [num1, setNum1] = useState (5);
    const [num2, setNum2] = useState(4);
    const [num3, setNum3] = useState(0)
    function sum(a,b){
        return a+b
    }
    useEffect(()=>{
        setNum3(num1+num2)
    },[])
    return(
        <form>
<input type='number' value={num1} onChange={e=>setNum1(e.target.value)}></input>
            <br></br>
            <input type='number' value = {num2} onChange={a=>setNum2(a.target.value)}></input>
               <button onClick={()=>setNum3(sum(num1,num2))}>sumar</button>
            <div>La suma de los dos numero es:  {num3}</div>
                <div>
        <label>Número 1 (Predeterminado):  {num1}</label>
        </div>
            <div>
            <label>Número 2 (Predeterminado): {num2}</label>
            </div>
        
        </form>
    )
}

export default Bucle;