import { combineReducers } from 'redux'
import namesReducer from './namesReducer'
import pairsReducer from './pairsReducer'

const rootReducer = combineReducers({
  names: namesReducer,
  pairs: pairsReducer
})

export default rootReducer
