import React from 'react'
import { useState, useEffect, useContext }  from 'react'

const Hook = () =>{
    const [count, setCount] = useState('-----')
    return(
 <form>
     <div>
         <label>Manejo del Use State </label>
     </div>
     <div>
          <label>Tu nombre es {count} </label>
     </div>
      <button onClick={() => setCount('Elvis')}>
        Click me
      </button>
 </form>
    )
}

const HookP = () =>{
        const [count, setCount] = useState('Tu nombre')
    const [calc,setCalc] = useState ('---> ')
      useEffect(() => {
            setCalc(() => count + ' Herrera');
          }, [count])
    return(
        <form>
            <div><label>Uso del Use Effect</label></div>
            <div>  <p>Nombre: {calc}</p>     </div>      
                  <button onClick={() => setCount ('Elvis')}>*-------*</button>
        </form>
    )
}

const HookC = () =>{
const themes={
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}
    const ThemeContext = React.createContext(themes.light);
    const theme = useContext(ThemeContext);
    return(
      <button style= {{ackground: theme.background, color: theme.foreground}}>
        Presiona
      </button>
    )
}

export {Hook, HookP, HookC};
