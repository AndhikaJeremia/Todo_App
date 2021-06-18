const INITIAL_STATE = {
    numberTask: {},
    detailTodo:[],
    doneTask: [],
}

const toDoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NUMBERTASK':
            return{
                ...state,
                numberTask: action.payload
            }
        case 'GETDETAILTODO':
            return{
                ...state,
                detailTodo: action.payload
            }
        case 'DONETASK':
            return{
                ...state,
                doneTask: action.payload
            }
        default:
            return state
    }
}

export default toDoReducer