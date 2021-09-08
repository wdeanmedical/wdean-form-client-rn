import { combineReducers } from 'redux'
import AppReducer from './reducer_app'
import FormReducer from './reducer_form'

const rootReducer = combineReducers({
  app: AppReducer,
  form: FormReducer,
})

export default rootReducer
