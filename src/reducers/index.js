import {combineReducers} from 'redux'
import toDoReducer from './toDo'
import userProfile from './userProfile'

const allReducer = combineReducers({
    toDoReducer,
    userProfile
})

export default allReducer