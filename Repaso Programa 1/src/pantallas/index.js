import React, { useState, useEffect } from 'react'
import Product from '../product/index'



const Gallery = () => {
    //Definición del estado
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
      const obtenerDatos = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setListaProductos([...data]);
      }

      obtenerDatos();

    }, []);
    

    //Si no hay producto emitimos un mensaje
    if (listaProductos.length === 0) {
        return <>
        <h1>Cargando productos</h1>
        </>
    }
    
    //Mostramos los productos
  return (
    <div style={{display:'flex', width:'100%', flexWrap:'wrap'}}>
    {
        listaProductos.map((p, i) => {
            return <Product key={i} product={p}></Product>
        })
    }
    </div>
    
  )
}