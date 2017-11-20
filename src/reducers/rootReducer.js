import {combineReducers} from 'redux'
import counter from 'incdec'


 const rootReducer = combineReducers({text:counter})
 export default rootReducer;