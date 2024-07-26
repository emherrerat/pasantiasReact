import React, { useState, useEffect } from 'react'
import Product from '../product/index'


import React, {useState, useEffect} from 'react'
import User from '../user/index'

const Usuario =()=>{
    //Definicioón del estado
    const [listaUser,setListaUser]=useState([]);
    useEffect(()=>{
       const obtenerDato = async () => {
            try {
                const res = await fetch('https://randomuser.me/api/');
                const data = await res.json();
                setListaUser(data.results); // Asignamos data.results a listaUser
            } catch (error) {
                console.error('Error al obtener datos:', error);
    
            }
        }
        obtenerDato();
    },[])

    //si no existe el usuario emitiremos un mensaje
//
    //Mostramos el ususario
    return(
        <div style={{display:'flex', width:'100%', flexWrap:'wrap'}}>
            {listaUser.map((user, index) => (
                <User key={index} user={user} />
            ))}
        </div>
    )
}
export default Usuario