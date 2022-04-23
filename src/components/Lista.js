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
        <div>
            <ul>{ lista.map((item, index)=><li key={index}><p>{item.tipoTransaccion} - {item.monto}</p></li>) }</ul>    
        </div>
    );
}