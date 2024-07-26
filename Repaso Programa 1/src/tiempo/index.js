import React from 'react'
import {useState} from 'react'

function Car(props){
    return <li>{props.brand}</li>
}

const Lista =()=>{
    const [id,setId]=useState(0)
    const [carFind, setCarFind]=useState({
                id:0,
        brand:'-------',
        age:'---------'
    })
    
    const shoot =()=>{
        const nameCars = cars.map( car => car.brand);
        const idCars=cars.map(car=>car.id);
        let found= false;
        for (var i=0; i<cars.length; i++){
            if(cars[i].id == id){
                found= true
                alert("Auto " + nameCars[i] + " entontrado: "+found)
                i=idCars.lenght+1
            }else{
                found=false
            }
        }
         if (!found){
             carFind.brand="No encontrado"
             carFind.age= "-----"
            alert("Auto no encontrado: " +found+carFind.brand)
        }else{
             carFind.brand=cars[id-1].brand
             carFind.age= cars[id-1].age
            alert("Auto encontrado -----> Marca: " + cars[id-1].brand+" Año: "+ cars[id-1].age);
        }
    }
    const cars =[
        {id: 1, brand: 'Ford', age: 2001},
        {id: 2, brand: 'BMW', age: 2002},
        {id: 3, brand: 'Mercedez BENZ', age: 2003},
        {id:4, brand: 'Renault', age:2006}
    ]
    return(
        <form>
            <div><label>Lista de Autos</label></div>
            <ul>
                {cars.map((car) =><Car key={car.id} brand={car.brand}/>)}
            </ul>
            <input type="text" placeholder="buscar...." 
                onChange={e=>setId(e.target.value)}
                ></input>
            <button  type="button" onClick={shoot} >Buscar</button>
            <br></br>
                <ul >
                    <li>Vehículo: {carFind.brand}</li>
                    <li>Año: {carFind.age}</li>
                </ul>
        </form>
    )
}

export default Lista