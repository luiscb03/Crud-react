import React from "react"
import "./estilos/eliminar.css"
import { BiTrashAlt } from "react-icons/bi";
import {firebase} from '../firebase'

export function Eliminar() {

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

    const eliminar= async (id) =>{
        try{
            const db = firebase.firestore()
            await db.collection('transacciones').doc(id).delete()
            const aux = lista.filter(item => item.id !== id)
            setLista(aux)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
            <p className='titulo'>Eliminar Movimientos</p>
            <div className="lista">
            <ul>{ 
                lista.map((item, index)=>{
                    return <li key={index} className="listaItem">
                                <div  className="seccionEliminar">
                                    <p>
                                        <b>Id de movimiento: </b>{item.id}<br /> 
                                        <b>Tipo de transaccion: </b>{item.tipoTransaccion}<br />
                                        <b>Clasificacion: </b>{item.clasificacion}<br />
                                        <b>Descripcion: </b>{item.descripcion}<br />
                                        <b>Monto: </b>${item.monto}<br />
                                        <b>Cedula: </b>{item.cedula}<br />
                                        <b>Nombre: </b>{item.nombre}<br />
                                        <b>Fecha: </b>{item.fecha}<br />
                                    </p>
                                    <button className="canecatbn" onClick={()=> eliminar(item.id)}>
                                        <BiTrashAlt/>
                                    </button>
                                </div>
                            </li>
                }) 
            }</ul>  
            </div>
        </>
    );
}
