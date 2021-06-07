///hooks
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarCitaAction } from '../actions/citasActions';
import { validarFormularioAction } from '../actions/validarActions';

import uuid from 'uuid/v4';

const AgregarCita = () => {

    //hooks - state del componente
    //Te permiten usar estado y otras características de React sin escribir una clase
    //cada const en una propiedad en el state - Declaración de una variable de estado que llamaremos "mascota"

    const [mascota, guardarMascota] = useState('');// useState: Devuelve una pareja de valores: el estado actual y una función que lo actualiza
    const [propietario, guardarPropietario] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    //el dispatch se usa para ejecutar acciones cuando ocurre un evento, acciones actualizaran el state mediante el reducer
    const dispatch = useDispatch();
    const agregarNuevaCita = (cita) => dispatch(agregarCitaAction(cita))

    //funcion que asocia con el dispatch la Action de validacion
    const validarFormulario = (estado) => dispatch(validarFormularioAction(estado));

        //use selector es similar a mapStateToProps con Hooks--permite acceder al state de en el store de redux
    const error = useSelector((state) => state.error);
   // console.log("error", error);

    //funcion cuando el form es enviado
    const submitNuevaCita = e => {
        e.preventDefault();

        //validar formulario
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            validarFormulario(true);
            return;
        }
        validarFormulario(false);
        //crear cita : le pasamos el payload que necesitamos en el action para crear la cita por ejemplo
        agregarNuevaCita({
            id: uuid(),
            mascota,//en js si clave-valor son iguales se puede poner solo la clave
            propietario,
            fecha,
            hora,
            sintomas
        })

        //reset formulario - -seteamos las variales de estado vacias
        guardarMascota("");
        guardarPropietario("");
        guardarFecha("");
        guardarHora("");
        guardarSintomas("");
    }
    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                <form onSubmit={submitNuevaCita}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Mascota"
                                value={mascota}
                                onChange={(e) => guardarMascota(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Dueño de la Mascota"
                                value={propietario}
                                onChange={(e) => guardarPropietario(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input
                                type="date"
                                className="form-control"
                                value={fecha}
                                onChange={(e) => guardarFecha(e.target.value)}
                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                                type="time"
                                className="form-control"
                                value={hora}
                                onChange={(e) => guardarHora(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea
                                className="form-control"
                                value={sintomas}
                                onChange={(e) => guardarSintomas(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
                {error.error ?<div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div>:null}

            </div>
        </div>
    );
}

export default AgregarCita