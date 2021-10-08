import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'
import PropTypes from 'prop-types'


import uuid from 'uuid/dist/v4';

export const Formulario = ({crearCita}) => {

    const [cita, handleInputChange, reset] = useForm({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(!error);
            return;
        }else{
            setError(false);
        }

        // asigbar id unico a cada cita creada

        cita.id = uuid();

        // enviar la cita al componente padre
        crearCita(cita);
        // console.log(cita);

        // reiniciar el form
        reset();
    }

    return (
        <>
            <h2>Crear Cita</h2>

            { error && <p className='alerta-error'>Todos los campos son obligatorios</p> }

            <form 
                onSubmit={handleSubmit}
            >
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={handleInputChange}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre Dueño de la Mascota'
                    onChange={handleInputChange}
                    value={propietario}
                />


                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={handleInputChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={handleInputChange}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={handleInputChange}
                    value={sintomas}
                >

                </textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >
                    Agregar Cita
                </button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}