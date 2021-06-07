//creamos un reducer para cada tipo de entidad que tenemos en la app,, sobre la cual tendremos distintos metodos
const initialState = {
    citas: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'AGREGAR_CITA':
            return {
                ...state, citas: [...state.citas, action.payload]
            }
        case 'BORRAR_CITA': 
            return{
                ...state,
                citas:state.citas.filter(cita=>(cita.id!==action.payload))
            }
        
        default:
            return state;

    }
}