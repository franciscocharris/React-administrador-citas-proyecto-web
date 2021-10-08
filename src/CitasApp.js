import React, { useEffect, useReducer } from 'react'
import { Cita } from './components/Cita';
import { citasReducer } from './components/citasReducer';
import { Formulario } from './components/Formulario'

export const CitasApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('citas')) || [];
    }
    
    const [citas, dispatch] = useReducer(citasReducer, [], init);

    const crearCita = cita => {
        dispatch({
            type: 'add',
            payload: cita,
        });
    }

    const eliminarCita = (id) => {
        dispatch({
            type: 'delete',
            payload: id,
        });
    }

    useEffect(() => {
        localStorage.setItem('citas', JSON.stringify(citas) );
    }, [citas])


    return (
        <>
            <h1>Administrador de Citas</h1>
            <a href='https://www.facebook.com/profile.php?id=100013541311546' rel="noopener noreferrer" target='_blank' className='credito'>por: Francisco M. Charris C.</a>
            <div className='container'>
                <div className='one-half column'>
                    <Formulario
                        crearCita={crearCita}
                    />
                </div>
                <div className='one-half column'>
                    <h2>{ citas.length > 0 ? 'Administra tus citas' : 'No hay citas' }</h2>
                    {
                        citas.map(cita => (
                           <Cita 
                                key={cita.id}
                                // al parecer se manda un objeto cita , que tiene una propiedad que es un
                                // objeto cita, porque se le hace destructuring cita nada mas parasacar el 
                                // objeto
                                cita={cita}
                                eliminarCita={eliminarCita}
                           /> 
                        ))
                    }
                </div>
            </div>
        </>
    )
}
