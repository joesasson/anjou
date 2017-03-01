import { combineReducers } from 'redux'
import namesReducer from './namesReducer'

const rootReducer = combineReducers({
  names: namesReducer
})

export default rootReducer
