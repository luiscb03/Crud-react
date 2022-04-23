import './estilos/lista.css'
import React from "react"
import {firebase} from '../firebase'

export function Lista() {
    const [lista, setLista] = React.useState([])

    React.useEffect(()=>{
        const obtenerDatos = async () =>{
            try{
                const db = firebase.firestore()
                const data = await db.collection('transacciones').get()
                const array = data.docs.map(item =>(
                    {
                        id:item.id, ...item.data()
                    }
                ))
                setLista(array)

            }catch(error){
                console.log(error)
            }
        }
        obtenerDatos()
    })

    return(
        <>
        <p className='titulo'>Movimientos</p>
        <div className="lista">
            <ul>{ 
                lista.map((item, index)=>{
                    return <li key={index} className="listaItem">
                            <p>
                                <b>Tipo de transaccion: </b>{item.tipoTransaccion}<br />
                                <b>Clasificacion: </b>{item.clasificacion}<br />
                                <b>Descripcion: </b>{item.descripcion}<br />
                                <b>Monto: </b>${item.monto}<br />
                                <b>Cedula: </b>{item.cedula}<br />
                                <b>Nombre: </b>{item.nombre}<br />
                                <b>Fecha: </b>{item.fecha}<br />
                            </p>
                        </li>
                }) 
            }</ul>    
        </div>
        </>
    );
}