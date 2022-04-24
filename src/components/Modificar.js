import React from "react"
import {firebase} from '../firebase'
import './estilos/modificar.css'

export function Modificar() {
    const [lista, setLista] = React.useState([])
    const [id, setId] = React.useState()
    const [modoEdicion, setModoEdicion] = React.useState(false)

    const [tipoTransaccion, setTipoTransaccion] = React.useState('')
    const [clasificacion, setClasificacion] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [monto, setMonto] = React.useState('')
    const [cedula, setCedula] = React.useState('')
    const [nombre, setNombre] = React.useState('')
    const [fecha, setFecha] = React.useState('')

    const obtenerUsuarioId = async (e) =>{
        e.preventDefault()
        try{
            const db = firebase.firestore()
            const data = await db.collection('transacciones').doc(id).get()
            const array = data.data()
            setModoEdicion(true)
            setLista(array)
            console.log(array)
        }catch(error){
            console.log(error)
        }
    }

    const editar = async (e) =>{
        e.preventDefault()
        try {
            const db = firebase.firestore()
            await db.collection('transacciones').doc(id).update({
                tipoTransaccion: tipoTransaccion,
                clasificacion: clasificacion,
                descripcion: descripcion,
                monto: monto,
                cedula: cedula,
                nombre: nombre,
                fecha: fecha
            })
            setModoEdicion(false)
            setTipoTransaccion('')
            setClasificacion('')
            setDescripcion('')
            setMonto('')
            setCedula('')
            setNombre('')
            setFecha('')

            alert('Informacion editada con exito')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <p className='titulo'>Modificar movimientos</p><p>(todos los campos deben ser editados)</p>
        <div className="lista">
            <form className="bsuqueda" onSubmit={obtenerUsuarioId}>
                <input type="text" name="idBusqueda" placeholder="Id de transaccion" onChange={(e) => setId(e.target.value)}/>
                <button type="submit" className="edit" >Buscar</button>
            </form>
            <hr/>
            
            <form className="formularioEdit" onSubmit={editar}>
                <label>Tipo de transaccion: </label> <input type="text" name="transaccion" id="" placeholder={lista.tipoTransaccion}
                                                onChange={(e) => setTipoTransaccion(e.target.value)} required/> <br />
                <label>Clasificacion: </label><input type="text" name="clasificacion" id="" placeholder={lista.clasificacion}
                                                onChange={(e) => setClasificacion(e.target.value)} required/><br />
                <label>Descripcion: </label><input type="text" name="descripcion" id="" placeholder={lista.descripcion}
                                                onChange={(e) => setDescripcion(e.target.value)}required/><br /> 
                <label>Monto: </label><input type="text" name="monto" id="" placeholder={'$'+lista.monto} 
                                                onChange={(e) => setMonto(e.target.value)}required/><br />
                <label>Cedula: </label><input type="text" name="cedula" id="" placeholder={lista.cedula}
                                                onChange={(e) => setCedula(e.target.value)}required/><br />  
                <label>Nombre: </label><input type="text" name="nombre" id="" placeholder={lista.nombre}
                                                onChange={(e) => setNombre(e.target.value)}required/><br /> 
                <label>Fecha: </label><input type="date" name="fecha" id="" placeholder={lista.fecha} 
                                                onChange={(e) => setFecha(e.target.value)}required/><br />
                <button type="submit" className="editt" >Guardar</button>
            </form>
        </div>
        </>
    );
}