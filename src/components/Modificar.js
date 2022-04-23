import React from "react"
import {firebase} from '../firebase'
import './estilos/modificar.css'
import { BiEditAlt } from "react-icons/bi";
import { FormEdicion } from "./FormEdicion";
import { Link, Route, Routes } from "react-router-dom";
import { Formulario } from "./Formulario";

export function Modificar() {
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

    const auxEditar = () =>{
    }

    return(
        <>
        <p className='titulo'>Modificar movimientos</p>
        <div className="lista">
            <form className="bsuqueda">
                <input type="text" name="idBusqueda" />
                <button type="submit" className="edit">Buscar</button>
            </form>
            <hr/>
            <ul>{ 
                // lista.map((item, index)=>{
                //     return <li key={index} className="listaItem">
                //             <div  className="seccionEliminar">
                //                     <p>
                //                         <b>Id de movimiento: </b>{item.id}<br /> 
                //                         <b>Tipo de transaccion: </b>{item.tipoTransaccion}<br />
                //                         <b>Clasificacion: </b>{item.clasificacion}<br />
                //                         <b>Descripcion: </b>{item.descripcion}<br />
                //                         <b>Monto: </b>${item.monto}<br />
                //                         <b>Cedula: </b>{item.cedula}<br />
                //                         <b>Nombre: </b>{item.nombre}<br />
                //                         <b>Fecha: </b>{item.fecha}<br />
                //                     </p>
                //                     <Link to="agregar">
                //                         <button id="btnEditar" className="lapizbtn" >
                //                             <BiEditAlt/>
                //                         </button>
                //                     </Link>
                //                     {/* <Routes>
                //                         <Route element={ <Formulario></Formulario>}/>
                //                     </Routes> */}
                //                 </div>
                //             </li>
                // }) 
            }
            </ul> 
        </div>
        </>
    );
}