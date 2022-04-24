import React from "react"
import "./estilos/formulario.css"
import {nanoid} from 'nanoid'
import {firebase} from '../firebase'

export function Formulario(props) {
    const [tipoTransaccion, setTipoTransaccion] = React.useState('')
    const [clasificacion, setClasificacion] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [monto, setMonto] = React.useState('')
    const [cedula, setCedula] = React.useState('')
    const [nombre, setNombre] = React.useState('')
    const [fecha, setFecha] = React.useState('')
    const [lista, setLista] = React.useState([])

    

    const guardar = async (e) =>{
        e.preventDefault()
        try {
            const db = firebase.firestore()
            const nuevaTransaccion = {
                tipoTransaccion: tipoTransaccion,
                clasificacion: clasificacion,
                descripcion: descripcion,
                monto: monto,
                cedula: cedula,
                nombre: nombre,
                fecha: fecha
            }

            
            setLista([...lista,
                {
                    id: nanoid(),
                    tipoTransaccion: tipoTransaccion,
                    clasificacion: clasificacion,
                    descripcion: descripcion,
                    monto: monto,
                    cedula: cedula,
                    nombre: nombre,
                    fecha: fecha
                }
            ])
            
            await db.collection('transacciones').add(nuevaTransaccion)

            setTipoTransaccion('')
            setClasificacion('')
            setDescripcion('')
            setMonto('')
            setCedula('')
            setNombre('')
            setFecha('')

            alert('Guardado con exito')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <p className="titulo">Registar nueva transaccion</p>
            <form onSubmit={guardar} className="form">
                <div className="secciones">
                    <label htmlFor="">Tipo de transaccion</label>
                    <select name="transaccion" onChange={(e)=>setTipoTransaccion(e.target.value)} required>
                        <option value="0"></option>
                        <option value="consignacion">Consignacion</option>
                        <option value="retiro">Retiro</option>
                    </select>
                </div>

                <div className="secciones">
                    <label htmlFor="">Clasificacion</label>
                    <select name="clasificacions" onChange={(e)=>setClasificacion(e.target.value)} required>
                        <option value="0"></option>
                        <option value="osio">Osio</option>
                        <option value="Pago de servicios">Pago de servicios</option>
                        <option value="alimentacion">Alimentacion</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <div className="secciones" >
                    <label htmlFor="">Descripcion</label>
                    <textarea name="descripciion" cols="40" rows="5" placeholder="" 
                        onChange={(e)=>setDescripcion(e.target.value)} required>
                    </textarea>
                </div>

                <div className="secciones">
                    <label htmlFor="">Monto de transaccion</label>
                    <input type="text" name="monto" id="" 
                        onChange={(e)=>setMonto(e.target.value)} required/>
                </div>

                <div className="secciones">
                    <label htmlFor="">Cedula</label>
                    <input type="text" name="cedula" id="" 
                        onChange={(e)=>setCedula(e.target.value)} required/>
                </div>

                <div className="secciones">
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="nombre" id="" 
                        onChange={(e)=>setNombre(e.target.value)} required/>
                </div>

                <div className="secciones">
                    <label htmlFor="">Fecha</label>
                    <input type="date" name="fecha" id="" 
                        onChange={(e)=>setFecha(e.target.value)} required/>
                </div>

                <button type="submit" className="btnEnviar">Crear</button>
            </form>
        </div>
    );
}
