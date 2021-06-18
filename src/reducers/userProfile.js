const INITIAL_STATE = {
    data_user: {}
}

const userProfileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GETDATA':
            return{
                ...state,
                data_user: action.payload
            }
    
        default:
            return state
    }
}

export default userProfileReducer