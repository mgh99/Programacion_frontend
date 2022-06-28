import React, { FC, useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import "./Comp.css";

type Ifila = {
    cantidad: number;
    nombre: string;
    proyecto: string;
    vencimiento: Date;
}

const Comp: FC = () => {

    const [datos, setData] = useState<any>([
        { cantidad: 54200, nombre: "Pinco Palino", proyecto: "Viajes espaciales" },
        { cantidad: 50212.21, nombre: "Robunautas Asociados", proyecto: "Profesor" },
        { cantidad: 500, nombre: "Sofí Rulicora", proyecto: "Marketing" },
    ]);

    const [aux1, setAux1] = useState<boolean>(false); // para mostrar el formulario
    const [aux2, setAux2] = useState<boolean>(false);
    const [aux3, setAux3] = useState<boolean>(false);

    const [indexAux, setIndexAux] = useState<number>(-1); // sirve para saber que fila se esta editando

    const [cant, setCant] = useState<number>(0); // sirve para guardar la cantidad
    const [nomb, setNomb] = useState<string>("---"); // sirve para guardar el nombre
    const [pro, setPro] = useState<string>("Viajes Especiales"); // sirve para guardar el proyecto
    const [ven, setVen] = useState<string>("mm/dd/yyyy"); // sirve para guardar la fecha de vencimiento

    const [startDate, setStartDate] = useState(new Date()); // sirve para guardar la fecha de vencimiento
    var datosAux = [];

    // sirve para guardar los datos en el arreglo, añade un nuevo elemento al arreglo
    const add = (cant: number, nombre: string, proyect: string, venci: Date) => {
        datosAux = datos;
        datosAux.push({ cantidad: cant, nombre: nombre, proyecto: proyect, vencimiento: venci });
        setData(datosAux);
    }

    // sirve para eliminar un elemento del arreglo
    const deleteRow = (index: number) => {
        datosAux = datos;
        datosAux.splice(index, 1); // elimina la fila 
        setData(datosAux);
    }

    const edit = (cant: number, nombre: string, proyect: string, venci: Date, index: number) => {
        datosAux = datos;
        datosAux.splice(index, 1, { cantidad: cant, nombre: nombre, proyecto: proyect, vencimiento: venci });
        setData(datosAux);
    }

    console.log(datos);
    return (
        <div id="container">
            <div id="firstfila">
                <div className = "nCantidad">Cantidad(€)</div>
                <div className = "nNombre">Nombre Empresa</div>
                <div className = "nProyecto">Proyecto</div>
                <div className = "nVencimiento">Vencimiento</div>
                <div className = "nBorrar">Borrar</div>
                <div className = "nEditar">Editar</div>
            </div>


            <div id="result">
                {datos && (
                    <div>
                        {datos.map((fila: Ifila, index: number) => (
                            <div className="fila">
                                <div className="fi">{fila.cantidad}</div>
                                <div className="fi">{fila.nombre}</div>
                                <div className="fi">
                                    <DropdownList
                                        defaultValue={fila.proyecto}
                                        data={[
                                            "Viajes espaciales",
                                            "Profesor",
                                            "Marketing",
                                        ]}
                                    />
                                </div>
                                <div className="fi">
                                    <DatePicker
                                        onChange={setStartDate}
                                        value={startDate} />
                                </div>
                                <button
                                    onClick={(e) => {
                                        deleteRow(index);
                                        setAux2(!aux2);
                                    }}
                                >Borrar</button>
                                <button
                                    onClick={(e) => {
                                        setAux3(true);
                                        setIndexAux(index);
                                    }}
                                >Editar</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>


            {aux1 && (
                <div className="filaAÑADIR">
                    <br/>
                    <br/>
                    <input
                        type="number"
                        placeholder="0"
                        value={cant}
                        onChange={(e) => {
                            setCant(parseInt(e.target.value));
                        }}
                    />
                    <input
                        type="text"
                        placeholder="nombre"
                        value={nomb}
                        onChange={(e) => {
                            setNomb(e.target.value);
                        }}
                    />
                    <select name="proyectos" value={pro} onChange={(e) => { setPro(e.target.value) }}>
                        <option value=" ">Selecciona un proyecto</option>
                        <option value="Viajes espaciales">Viajes espaciales</option>
                        <option value="Profesor">Profesor</option>
                        <option value="Marketing">Marketing</option>
                    </select>

                    <DatePicker
                        onChange={setStartDate}
                        value={startDate} />

                </div>
            )}
            {aux1 && (
                <div>
                    <button
                        onClick={(e) => {
                            add(cant, nomb, pro, startDate);
                            setAux1(false);
                            setCant(0);
                            setNomb("");
                            setPro("");
                            setVen("");
                        }}
                    >Añadir</button>
                </div>
            )}
            <div id="botones">
                {!aux1 && (
                    <button
                        onClick={(e) => {
                            setAux1(true);
                        }}
                    >Añadir contabilidad</button>
                )}
            </div>
            {aux3 && (
                <div className="fila">
                    <input
                        type="number"
                        placeholder="cantidad"
                        value={cant}
                        onChange={(e) => {
                            setCant(parseInt(e.target.value));
                        }}
                    />
                    <input
                        type="text"
                        placeholder="nombre"
                        value={nomb}
                        onChange={(e) => {
                            setNomb(e.target.value);
                        }}
                    />
                    <select name="proyectos" value={pro} onChange={(e) => { setPro(e.target.value) }}>
                        <option value=" ">Selecciona un proyecto</option>
                        <option value="Viajes espaciales">Viajes espaciales</option>
                        <option value="Profesor">Profesor</option>
                        <option value="Marketing">Marketing</option>
                    </select>

                    <DatePicker
                        onChange={setStartDate}
                        value={startDate} />
                </div>
            )}
            <div id="botones">
                {aux3 && (
                    <button
                        onClick={(e) => {
                            edit(cant, nomb, pro, startDate, indexAux);
                            setAux3(false);
                            setCant(0);
                            setNomb("");
                            setPro("");
                            setVen("");
                        }}
                    >Editar contabilidad</button>
                )}
            </div>
        </div>
    );
};
export default Comp;
