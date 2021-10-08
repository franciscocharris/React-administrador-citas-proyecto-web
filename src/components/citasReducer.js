
export const citasReducer = (state = [], action) =>{

    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        
        case 'delete':
            // sacara un nuevo arreglo con todos ecepto por el que queremos eliminar
            return state.filter(cita => cita.id !== action.payload);
        default:
            return state;
    }
}