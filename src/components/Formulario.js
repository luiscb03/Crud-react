import "./estilos/formulario.css"

export function Formulario() {
    return(
        <div>
            <p className="titulo">Registar nueva transaccion</p>
            <form action="">
                <div className="secciones">
                    <label htmlFor="">Tipo de transaccion</label>
                    <select name="tipoTransaccion">
                    <option value="0"></option>
                        <option value="consignacion">Consignacion</option>
                        <option value="retiro">Retiro</option>
                    </select>
                </div>

                <div className="secciones">
                    <label htmlFor="">Clasificacion</label>
                    <select name="clasificacion">
                        <option value="0"></option>
                        <option value="osio">Osio</option>
                        <option value="pagoServicios">Pago de servicios</option>
                        <option value="alimentacion">Alimentacion</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <div className="secciones">
                    <label htmlFor="">Descripcion</label>
                    <textarea name="descripciion" cols="40" rows="5" placeholder=""></textarea>
                </div>

                <div className="secciones">
                    <label htmlFor="">Monto de transaccion</label>
                    <input type="number" name="monto" id="" />
                </div>

                <div className="secciones">
                    <label htmlFor="">Cedula</label>
                    <input type="number" name="cedula" id="" />
                </div>

                <div className="secciones">
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="nombre" id="" />
                </div>

                <div className="secciones">
                    <label htmlFor="">Fecha</label>
                    <input type="date" name="fecha" id="" />
                </div>

                <button type="submit" className="btnEnviar">Crear</button>
            </form>
        </div>
    );
}